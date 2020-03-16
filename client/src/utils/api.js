const axios = require("axios");

export default {
  // Get all posts

  getComments: function(req, response) {
    return axios.get("/api/comments/", response);
  },

  saveComment: function(comment) {
    return axios.post("/api/comments/", comment);
  },

  getStocks: function() {
    return axios.get("/api/stocks/");
  },

  getEmployees: function() {
    return axios.get("/api/employees/");
  },

  getWages: function() {
    return axios.get("/api/wages/");
  },

  getCases: function() {
    return axios.get("/api/coronavirus/");
  }
};
