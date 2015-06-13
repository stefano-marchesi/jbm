var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var auth = require('./../auth.js');

var postModel = require('./model.js');
var post = postModel.post;


router.route("/")

  .get(auth.all(), function(request, response) {

    post.find(function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  })

  .post(auth.amministratore(), function(request, response) {
    var newpost = new post(request.body);
    newpost.save(function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  });


  router.route("/addtocounter/:id/:tipo")

    .get(auth.all(), function(request, response) {


      post.findById(request.params.id, function (err, doc) {

  doc.contatori[request.params.tipo] +=1;
  doc.save(function(){
    response.status(200).send('oook');
  });
});


    });


router.route("/:id")
  .get(auth.all(), function(request, response) {
    post.findById(request.params.id, function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  })

  .put(auth.amministratore(), function(request, response) {
    post.findByIdAndUpdate(request.params.id, request.body, function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  })

  .delete(auth.amministratore(), function(request, response) {
    post.findByIdAndRemove(request.params.id, function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  });

module.exports = router;
