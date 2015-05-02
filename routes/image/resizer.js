var gm = require("gm");
var fs = require("fs");

exports.resize = function(path, endL, endA) {

  gm(path).size(function(err, value) {
    var startL= value.width;
    var startA = value.height;
    var startAR= endL/ endA;
    console.log(startAR);

    });
};
