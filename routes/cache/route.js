var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var auth = require('./../auth.js');

var tagsModel = require('./../tags/model.js');
var tags = tagsModel.tags;

var sliderModel = require('./../slider/model.js');
var slider = sliderModel.slider;

var postModel = require('./../post/model.js');
var post = postModel.post;

var sponsorModel = require('./../sponsor/model.js');
var sponsor = sponsorModel.sponsor;

router.route("/")


.get(auth.all(), function(request, response) {

  var cache = {};

  tags.find().exec(function(err, dataTag) {
    cache.tags = dataTag;

    slider.find().exec(function(err, dataslider) {
      cache.slider = dataslider;

      post.find({
        attivo: true
      }).sort({'date': -1}).exec(function(err, datapost) {
        cache.post = datapost;

        sponsor.find({attivo: true}).exec(function(err,datasponsor) {
        cache.sponsor=datasponsor;

          response.json(cache);

        });

      });
    });
  });


});

router.route("/auth")
  .get(auth.amministratore(), function(request, response) {
    console.log(request.headers);
    response.send('ok');

  });



module.exports = router;

/*

posts.find({'creator.user_id': req.params.user_id}).sort({'_id': -1}).exec(function(err,userpost) {
    if(err)
        res.send(err);
    res.json(userpost);
});

sponsor.find({attivo: true}).exec(function(err,data) {
cache.sponsor=post;
});


*/
