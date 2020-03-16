// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  // Creates a model that matches up with DB
  var Employees = sequelize.define("Employees", {
    seriesID: Sequelize.STRING,
    industry: Sequelize.STRING,
    employees: Sequelize.FLOAT,
  },
  {
    freezeTableName: true,
    tableName: 'Employees'
  });
  Employees.sync({ force: true });
  return Employees;
};