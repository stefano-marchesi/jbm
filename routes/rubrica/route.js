var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var auth = require('./../auth.js');

var rubricaModel = require('./model.js');
var rubrica = rubricaModel.rubrica;


router.route("/")

.get(auth.all(), function(request, response) {
  rubrica.find(function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });

})


.post(auth.all(), function(request, response) {
  var newrubrica = new rubrica(request.body);
  newrubrica.save(function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });
});

router.route("/unconfirmed")
.get(auth.amministratore(), function(request, response) {
  console.log('rubricai speciali richiesti');
  rubrica.find({
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


.get(auth.amministratore(), function(request, response) {
  rubrica.find({
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

.put(auth.amministratore(), function(request, response) {
  rubrica.findByIdAndUpdate(request.params.id, request.body, function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });
})

.delete(auth.amministratore(), function(request, response) {
  rubrica.findByIdAndRemove(request.params.id, function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });
});




module.exports = router;
