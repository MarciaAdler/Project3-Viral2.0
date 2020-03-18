const router = require("express").Router();

const stockdata = require("stock-data.js");

// const token = process.env.STOCK_APIKEY;

const token = process.env.STOCK2_APIKEY;
const endDate = new Date().toISOString().slice(0, 10);

console.log(endDate);
router.route("/api/stocks/").get((req, res) => {
  stockdata
    .historical({
      symbol: "XLY",
      API_TOKEN: token,
      options: {
        date_from: "2020-01-21",
        date_to: endDate
      }
    })
    .then(response => {
      const obj = response.history;
      console.log(obj);
      const result = Object.keys(obj).map(function(key) {
        return { date: key, close: obj[key].close };
      });
      res.json(result);
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
