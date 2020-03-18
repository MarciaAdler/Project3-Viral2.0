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

  getEmployees: function(industry) {
    return axios.get("/api/employees/" + industry);
  },

  getWages: function(industry) {
    return axios.get("/api/wages/" + industry);
  },

  getCases: function() {
    return axios.get("/api/coronavirus/");
  }
};
