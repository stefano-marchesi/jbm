var mongoose = require('mongoose');

var rubricaSkema = mongoose.Schema({

  approvato: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
  nome: String,
  mail: String,
  testo: String,
  risposta: String

});
exports.rubrica = mongoose.model("rubrica", rubricaSkema);
