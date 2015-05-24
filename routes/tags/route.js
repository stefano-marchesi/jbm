var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var auth = require('./../auth.js');

var tagsModel = require('./model.js');
var tags = tagsModel.tags;


router.route("/")

  .get(auth.all(), function(request, response) {
    tags.find(function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  })

  .post(auth.amministratore(), function(request, response) {
    var newtags = new tags(request.body);
    newtags.save(function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  });

router.route("/:id")

  .get(auth.all(), function(request, response) {
    tags.findById(request.params.id, function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  })

  .put(auth.amministratore(), function(request, response) {
    tags.findByIdAndUpdate(request.params.id, request.body, function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  })

  .delete(auth.amministratore(), function(request, response) {
    tags.findByIdAndRemove(request.params.id, function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  });

module.exports = router;
