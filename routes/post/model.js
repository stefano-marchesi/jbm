var mongoose = require('mongoose');

var postSkema = mongoose.Schema({

  date: { type: Date, default: Date.now },
  tipo: String ,
  titolo: String,
  testo: String,
  header: [String],
  copertina: { nome: String, orientation: String },
  galleria: [{ nome: String, orientation: String }],
  tags: [String],
  attivo: { type: Boolean, default: false }



});
exports.post = mongoose.model("post", postSkema);
