var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var rubricaModel = require('./model.js');
var rubrica = rubricaModel.rubrica;


router.route("/")

.get(function(request, response) {
  rubrica.find(function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });

})


.post(function(request, response) {
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
.get(function(request, response) {
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


.get(function(request, response) {
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

.put(function(request, response) {
  rubrica.findByIdAndUpdate(request.params.id, request.body, function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });
})

.delete(function(request, response) {
  rubrica.findByIdAndRemove(request.params.id, function(err, data) {
    if (err) {
      response.status(400).send('Bad Request: ' + err);
    } else {
      response.json(data);
    }
  });
});




module.exports = router;
