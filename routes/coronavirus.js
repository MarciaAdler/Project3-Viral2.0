const router = require("express").Router();
const coronaController = require("../controllers/coronaController");

// Matches with "/api/comments"
router.route("/api/coronavirus/").get(coronaController.findAll);

module.exports = router;
