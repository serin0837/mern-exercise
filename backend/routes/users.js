const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find() //find method
    .then((users) => res.json(users)) //json format users from database
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
