const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Comment.findAll({})

      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Comment.create({
      comment: req.body.comment,
      username: req.body.username,
      date: req.body.date
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
