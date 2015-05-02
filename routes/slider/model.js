var mongoose = require('mongoose');

var sliderSkema = mongoose.Schema({

  stato: String,
  immagini:[String],
  attributo:String


});
exports.slider = mongoose.model("slider", sliderSkema);
