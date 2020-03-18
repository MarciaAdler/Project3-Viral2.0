const db = require("../models");

// Defining methods for the coronaController
module.exports = {
  findAll: function(req, res) {
    db.Case.findAll({
      where: { country: "US" }
    })

      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
