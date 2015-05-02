var express = require("express");
var router = express.Router();
var multer = require("multer");
var gm = require("gm");

var mongoose = require("mongoose");
var imageModel = require('./model.js');
var image = imageModel.image;
var imagehandler = require('./imagehandler.js');


router.route("/")

.get(function(request, response) {
  image.find(function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });

})


.post(imagehandler.add(), function(request, response) {

  var path = request.files.file.path;
  request.body.nome = request.files.file.name;


  gm(path).size(function(err, value) {
    if (value.width >= value.height) {
      request.body.orientation = 'orizzontale';
    } else {
      request.body.orientation = 'verticale';
    }

    var newimage = new image(request.body);
    newimage.save(function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: ' + err);
      } else {
        response.json(data);
      }
    });

  });

});


router.route("/:id")


.get(function(request, response) {
  image.find({
      rif: request.params.id
    })
    .exec(function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: ' + err);
      } else {
        response.json(data);
      }
    });
})

.put(function(request, response) {
  image.findByIdAndUpdate(request.params.id, request.body, function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });
})

.delete( function(request, response) {

      imagehandler.remove(request.params.id, function(){

  image.findByIdAndRemove(request.params.id, function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });

      });

});




module.exports = router;
