var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var commentModel = require('./model.js');
var comment = commentModel.comment;


router.route("/")

.get(function(request, response) {
  comment.find(function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });

})


.post(function(request, response) {
  var newcomment = new comment(request.body);
  newcomment.save(function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });
});

router.route("/unconfirmed")
.get(function(request, response) {
  console.log('commenti speciali richiesti');
  comment.find({
    approvato: false
    }, function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });
});
router.route("/:id")


.get(function(request, response) {
  comment.find({
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
  comment.findByIdAndUpdate(request.params.id, request.body, function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });
})

.delete(function(request, response) {
  comment.findByIdAndRemove(request.params.id, function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });
});




module.exports = router;
