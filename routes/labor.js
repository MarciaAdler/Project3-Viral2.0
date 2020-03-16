const router = require("express").Router();
const laborController = require("../controllers/laborController");

// Matches with "/api/comments"
router.route("/api/employees/").get(laborController.findAllEmployees);
router.route("/api/wages/").get(laborController.findAllWages);
module.exports = router;
