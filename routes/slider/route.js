var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var auth = require('./../auth.js');

var sliderModel = require('./model.js');
var slider = sliderModel.slider;


router.route("/")

  .get(auth.amministratore(), function(request, response) {
    slider.find(function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  })

  .post(auth.amministratore(), function(request, response) {
    var newslider = new slider(request.body);
    newslider.save(function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  });

router.route("/:id")

  .get(auth.amministratore(), function(request, response) {
    slider.findById(request.params.id, function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  })

  .put(auth.amministratore(), function(request, response) {
    slider.findByIdAndUpdate(request.params.id, request.body, function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  })

  .delete(auth.amministratore(), function(request, response) {
    slider.findByIdAndRemove(request.params.id, function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  });

module.exports = router;
