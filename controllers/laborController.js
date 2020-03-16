const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAllEmployees: function(req, res) {
    db.Employees.findOne({ where: { industry: "Sporting and athletic goods" } })

      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllWages: function(req, res) {
    db.Wages.findAll({ where: { industry: "Sporting and athletic goods" } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
