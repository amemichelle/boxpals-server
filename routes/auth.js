const express = require("express");
const router = express.Router();
const fs = require("fs");

// FROM PASSPORT TUTORIAL
const knex = require("knex")(require("../knexfile.js").development);

// Get data from users table in database.
router.get("/users", (req, res) => {
  knex
    .select("*")
    .from("users")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send("Error getting users");
    });
});

router.post("/signup", function (req, res, next) {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;

  knex("users")
    .insert({
      username: username,
      email: email,
      password: password,
    })
    .then((user_id) => {
      knex("users")
        .where({ id: user_id[0] })
        .then((data) => {
          res.json(data);
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error getting users");
    });
});

router.post("/login", function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;

  knex("users")
    .where({
      username: req.body.username,
      password: req.body.password,
    })
    .then((data) => {
      res.json(data);
    });
});

module.exports = router;
