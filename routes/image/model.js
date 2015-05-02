var mongoose = require('mongoose');

var imageSkema = mongoose.Schema({

  date: { type: Date, default: Date.now },
  nome: String,
  testo: String,
  rif: String,
  tipo: String,
  orientation: String

});
exports.image = mongoose.model("image", imageSkema);
