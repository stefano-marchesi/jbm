var mongoose = require("mongoose");
var _ = require("lodash");
var sm = require('sitemap');
var fs = require('fs');

var postModel = require('./routes/post/model.js');
var post = postModel.post;


var fixedPages = [{
  url: '/'
}, {
  url: '/articoli'
}, {
  url: '/outfit'
}, {
  url: '/travel'
}, {
  url: '/shooting'
}, {
  url: '/rubrica'
}, {
  url: '/galleria'
}, {
  url: '/aboutme'
}, {
  url: '/contact'
}, {
  url: '/press'
}];




exports.update = function() {

  post.find({
      attivo: true
    }).sort('-date')
    .exec(function(err, data) {

      _(data).forEach(function(n) {
        fixedPages.push({
          url: '/post/'+n._id,
          img : 'http://localhost/images/copertina/'+n.copertina.nome
        });
      }).value();

      var sitemap = sm.createSitemap({
          hostname: 'http://localhost/#!',
          cacheTime: 600000,  //600 sec (10 min) cache purge period
          urls: fixedPages
      });

      fs.writeFileSync("./public/sitemap.xml", sitemap.toString());
      return console.log(fixedPages);
    });

};