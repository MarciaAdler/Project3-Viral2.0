const router = require("express").Router();
const laborController = require("../controllers/laborController");

// Matches with "/api/comments"
router.route("/api/employees/:industry").get(laborController.findAllEmployees);
router.route("/api/wages/:industry").get(laborController.findAllWages);
module.exports = router;
