var express = require('express');
var app = express();

var serveStatic = require('serve-static')
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');
var gm = require('gm');
var cors = require('cors');

// connessione a mongo
mongoose.connect('mongodb://localhost:27017/jbm');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connesso a mongo');
});

var serve = serveStatic('public')
// Middelwere
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
var cache = require('./routes/cache/route.js');
app.use('/api/cache', cache);

var slider = require('./routes/slider/route.js');
app.use('/api/slider', slider);

var rubrica = require('./routes/rubrica/route.js');
app.use('/api/rubrica', rubrica);

var contact = require('./routes/contact/route.js');
app.use('/api/contact', contact);

var tags = require('./routes/tags/route.js');
app.use('/api/tags', tags);

var comment = require('./routes/comment/route.js');
app.use('/api/comment', comment);

var image = require('./routes/image/route.js');
app.use('/api/image', image);

var post = require('./routes/post/route.js');
app.use('/api/post', post);



// Server
app.listen(80, function() {
  console.log('listening to port 80');
});
