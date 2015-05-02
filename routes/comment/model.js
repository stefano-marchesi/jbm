var mongoose = require('mongoose');

var commentSkema = mongoose.Schema({

  approvato: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
  nome: String,
  mail: String,
  testo: String,
  rif: String

});
exports.comment = mongoose.model("comment", commentSkema);
