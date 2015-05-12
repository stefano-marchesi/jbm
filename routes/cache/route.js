var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var tagsModel = require('./../tags/model.js');
var tags = tagsModel.tags;

var sliderModel = require('./../slider/model.js');
var slider = sliderModel.slider;

var postModel = require('./../post/model.js');
var post = postModel.post;

var sponsorModel = require('./../sponsor/model.js');
var sponsor = sponsorModel.sponsor;

router.route("/")


  .get(function(request, response) {

    var cache = {};

    tags.find(function(err, data) {
      if (err) {response.status(400).send('Bad Request: '+ err);} else {cache.tags=data;}

      slider.find(function(err, data) {
        if (err) {response.status(400).send('Bad Request: '+ err);} else {cache.slider=data;}

        post.find({attivo:true},function(err, data) {
          if (err) {response.status(400).send('Bad Request: '+ err);} else {cache.post=data;}

          sponsor.find({attivo:true},function(err, data) {
            if (err) {response.status(400).send('Bad Request: '+ err);} else {cache.sponsor=data;}

        response.json(cache);

          });

        });
      });
    });


  });

module.exports = router;
