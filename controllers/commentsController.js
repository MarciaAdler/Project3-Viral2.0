const fetch = require("node-fetch");
const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Comment.findAll({})

      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: async function(req, res) {

    const data = await fetch("https://uifaces.co/api?limit=1", {
      method:'GET',
      headers:{
        'X-API-KEY': process.env.UI_FACES_APIKEY,
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      }
    })
    .then(response => {
      return response.json();
    });

    db.Comment.create({
      comment: req.body.comment,
      username: req.body.username,
      image: data[0].photo || null,
      date: req.body.date
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
