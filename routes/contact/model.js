var mongoose = require('mongoose');

var contactSkema = mongoose.Schema({

  approvato: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
  nome: String,
  mail: String,
  testo: String

});
exports.contact = mongoose.model("contact", contactSkema);
