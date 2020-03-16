const router = require("express").Router();
const commentsController = require("../controllers/commentsController");

// Matches with "/api/comments"
router
  .route("/api/comments/")
  .get(commentsController.findAll)
  .post(commentsController.create);

module.exports = router;
