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
  },

  signupUser: function(user) {
    // console.log(user);
    return axios.post('/api/signup/', user);
    // .then (res => {
    //   console.log(user);
    //   window.location.replace("/");
    // });   
  },

  loginUser: function(user) {
    return axios.post('/api/login', user);

  }
};
