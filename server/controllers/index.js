var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      var data = models.messages.get();
      res.send(data);
    }, 


    // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('adadasd');
      console.log(req.body);
      models.messages.post(req.body);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log(req.body);
    },
    post: function (req, res) {
      console.log(req.body);
      models.users.post(req.body);
    }
  }
};

