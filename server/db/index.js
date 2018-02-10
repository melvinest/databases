var mysql = require('mysql');
var dbConnection = mysql.createConnection({
  password: 'student',
  user: 'student',
  database: 'chat'
});

module.exports.dbConnection = dbConnection;

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


