var express = require('express');
var db = require('./db');
var cors = require('cors');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
app.use(cors());
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

// Set up our routes
app.use('/classes', router);




// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

db.dbConnection.connect();
// var query = 'INSERT INTO messages (text) VALUES (\'hello world\')';
// // var query = 'DESCRIBE rooms';
// // DESCRIBE rooms;
// // DESCRIBE messages;
// db.dbConnection.query(query, function(e, r, f) {
//   if (e) {
//     console.log(e);
//   }

//   console.log(r);
//   // console.log('XXXXXXXXXXXXXXXX');
//   // console.log(f);
// });

