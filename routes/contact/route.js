var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var contactModel = require('./model.js');
var contact = contactModel.contact;


router.route("/")

.get(function(request, response) {
  contact.find(function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });

})


.post(function(request, response) {
  var newcontact = new contact(request.body);
  newcontact.save(function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });
});

router.route("/unconfirmed")
.get(function(request, response) {
  console.log('contacti speciali richiesti');
  contact.find({
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
  contact.find({
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
  contact.findByIdAndUpdate(request.params.id, request.body, function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });
})

.delete(function(request, response) {
  contact.findByIdAndRemove(request.params.id, function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });
});




module.exports = router;
