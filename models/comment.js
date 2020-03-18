// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  // Creates a model that matches up with DB
  var Comment = sequelize.define("Comment", {
    comment: Sequelize.STRING,
    username: Sequelize.STRING,
    image: Sequelize.STRING
  });
  //Case.sync({ force: true });
  return Comment;
};
