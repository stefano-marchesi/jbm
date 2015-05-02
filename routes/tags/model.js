var mongoose = require('mongoose');

var tagsSkema = mongoose.Schema({

  nome: String

});
exports.tags = mongoose.model("tags", tagsSkema);
