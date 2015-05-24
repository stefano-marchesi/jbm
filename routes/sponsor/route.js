var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var auth = require('./../auth.js');

var sponsorModel = require('./model.js');
var sponsor = sponsorModel.sponsor;


router.route("/")

  .get(auth.all(), function(request, response) {
    sponsor.find(function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  })

  .post(auth.amministratore(), function(request, response) {
    var newsponsor = new sponsor(request.body);
    newsponsor.save(function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  });

router.route("/:id")

  .get(auth.amministratore(), function(request, response) {
    sponsor.findById(request.params.id, function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  })

  .put(auth.amministratore(), function(request, response) {
    sponsor.findByIdAndUpdate(request.params.id, request.body, function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  })

  .delete(auth.amministratore(), function(request, response) {
    sponsor.findByIdAndRemove(request.params.id, function(err, data) {
      if (err) {
        response.status(400).send('Bad Request: '+ err);
      } else {
        response.json(data);
      }
    });
  });

module.exports = router;
