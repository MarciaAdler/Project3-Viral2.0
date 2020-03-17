const router = require('express').Router();
// const userController = require('../controllers/userController');
// const User = require("../models/user");
const db = require("../models");

//Get all users
router.route('/api/users').get ((req, res) => {
  User.find()
  .then(user => res.json(user))
  .catch(err => res.status(400).json ('Error: ' + err));
});

//Get one user
router.route('/api/login').get ((req, res) => {
  User.findOne(req.body.user)
  .then(user => console.log(user))
  .catch(err => res.status(400).json ('Error: ' + err))
});

router.route('/api/signup').post((req,res) => {

  const username = req.body.username;
  const password = req.body.password;
  
  db.User.create({
    username: username, 
    password: password
  })
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));

})

router.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  // basic validation
  console.log("Login route", username, " " ,password)
  if (!username || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  //check for existing user
  db.User.findOne({where: { username: username }}).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });
    console.log(user)
    // Validate password
    // const sessUser = { id: user._id, name: username };
    // req.session.user = sessUser; // Auto saves session data in mongo store

    res.json({ msg: " Logged In Successfully"}); // sends cookie with sessionID automatically in response
   });
  });

module.exports = router;

