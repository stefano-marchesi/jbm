var mongoose = require('mongoose');

var imageSkema = mongoose.Schema({

  date: { type: Date, default: Date.now },
  nome: String,
  testo: String,
  rif: String,
  tipo: String,
  orientation: String,
  attivo: { type: Boolean, default: false },
  contatori: {
    cuori: { type: Number, default: 0 }
  }

});
exports.image = mongoose.model("image", imageSkema);
