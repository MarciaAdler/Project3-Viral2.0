const axios = require("axios");

export default {
  // Get all posts

  getBooks: function(req, response) {
    return axios.get("/api/", response);
  },

  saveComment: function(comment) {
    return axios.post("/api/", comment);
  }
};
