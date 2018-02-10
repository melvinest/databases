var db = require('../db');

var queryAsync = function(query) {
  // console.log(query);
  var promise = new Promise(function(resolve, reject) {
    db.dbConnection.query(query, function(error, results, fields) {
      resolve(results);
      reject(error);
    });
  });
  return promise;
};

module.exports = {
  messages: {
    get: function () {
      var query = 'SELECT * FROM messages ORDER BY objectId DESC LIMIT 100 ';
      return queryAsync(query).then(function(results) {
        return new Promise(function(resolve, reject) {
          resolve(results);
        });
      });
    }, 

    // a function which produces all the messages
    post: function (body) {
      var query = "INSERT INTO messages (username, text, roomname)\
        VALUES ('" + body.username + "', '" + body.text + "', '" + body.roomname + "')";
      return queryAsync(query).then(function(results) {
        return new Promise(function(resolve, reject) {
          resolve(results);
        });
      });
    } 
  // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (body) {
      var query = 'INSERT INTO users (username) VALUES (\'' + body.username + '\')';
      db.dbConnection.query(query, function(error, results, fields) {
        if (error) {
          console.log(error);
          throw error;
        }
      });

      db.dbConnection.query('SELECT * FROM users ORDER BY id DESC LIMIT 100 ', function(error, results, fields) {
        if (error) {
          console.log(error);
          throw error;
        }
        console.log(results);
      });

    }
  }
};

