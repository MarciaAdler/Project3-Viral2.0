const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAllEmployees: function(req, res) {
    console.log(req.params.industry);
    db.Employees.findOne({ where: { industry: req.params.industry } })

      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllWages: function(req, res) {
    db.Wages.findAll({ where: { industry: req.params.industry } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
