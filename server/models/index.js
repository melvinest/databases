var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.dbConnection.query('SELECT * FROM messages ORDER BY id DESC LIMIT 100 ', function(error, results, fields) {
        if (error) {
          console.log(error);
          throw error;
        }
        return results;
      });
    }, 

    // a function which produces all the messages
    post: function () {
      
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

