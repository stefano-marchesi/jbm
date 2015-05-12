var mongoose = require('mongoose');

var sponsorSkema = mongoose.Schema({

  date: { type: Date, default: Date.now },

  link: String,

  titolo: String,

  copertina: { nome: String, orientation: String },

  attivo: { type: Boolean, default: false }



});


exports.sponsor = mongoose.model("sponsor", sponsorSkema);
