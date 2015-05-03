var multer = require("multer");
var gm = require("gm");
var fs = require("fs");

var mongoose = require("mongoose");
var imageModel = require('./model.js');
var image = imageModel.image;

var copertina = {
  large:{long:600, short:400},
  thumb:{long:300, short:200}
};

var galleria = {
  large:{long:600, short:400},
  thumb:{long:300, short:200}
};

var header = {
  large:{long:1000, short:500}
};

var destfolder='./public/images';


var resize = function(path, endPath, endL, endA) {

  gm(path)
  .options({imageMagick: true})
    .resize(endL, endA, '^')
    .gravity('Center')
    .crop(endL, endA)
    .write(endPath, function(err) {
      if (err) console.log(err);
    });

};

exports.add = function() {
  return multer({
    dest: './public/images/upload/',


    onParseEnd: function(request, next) {
      var path = request.files.file.path;
      var name = request.files.file.name;
      var tipo = request.body.tipo;

      gm(path).size(function(err, value) {
        if (value.width >= value.height) {
          request.body.orientation = 'orizzontale';
        } else {
          request.body.orientation = 'verticale';
        }


        switch (tipo) {
          case 'copertina':

            if (request.body.orientation === 'orizzontale') {
              resize(path, destfolder +'/copertina/' + name, copertina.large.long, copertina.large.short);
              resize(path, destfolder +'/copertina/thumb/' + name, copertina.thumb.long, copertina.thumb.short);
            }
            if (request.body.orientation === 'verticale') {
              resize(path, destfolder +'/copertina/' + name, copertina.large.short, copertina.large.long);
              resize(path, destfolder +'/copertina/thumb/' + name, copertina.thumb.short, copertina.thumb.long);
            }

            break;

          case 'galleria':

          if (request.body.orientation === 'orizzontale') {
            resize(path, destfolder +'/galleria/' + name, galleria.large.long, galleria.large.short);
            resize(path, destfolder +'/galleria/thumb/' + name, galleria.thumb.long, galleria.thumb.short);
          }
          if (request.body.orientation === 'verticale') {
            resize(path, destfolder +'/galleria/' + name, galleria.large.short, galleria.large.long);
            resize(path, destfolder +'/galleria/thumb/' + name, galleria.thumb.short, galleria.thumb.long);
          }

            break;

          case 'header':

          resize(path, destfolder +'/header/' + name, header.large.long, header.large.short);

            break;

          default:
            console.log('tipo non consentito');
        }
      });

      next();
    }


  });
};

var removeImg = function(imgPath){
  fs.exists(imgPath, function(exists) {
  if (exists) {
    fs.unlinkSync(imgPath);
  } else {

  }
});
};

exports.remove = function(toRemove, cb) {

  image.findById(toRemove, function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {

      removeImg('./public/images/upload/' + data.nome);

      switch (data.tipo) {
        case 'copertina':
        removeImg(destfolder +'/copertina/' + data.nome);
        removeImg(destfolder +'/copertina/thumb/' + data.nome);


          cb();

          break;

        case 'galleria':

        removeImg(destfolder +'/galleria/' + data.nome);
        removeImg(destfolder +'/galleria/thumb/' + data.nome);
          cb();

          break;

        case 'header':

        removeImg(destfolder +'/header/' + data.nome);
          cb();

          break;

        default:

          cb();
      }

    }
  });

};
