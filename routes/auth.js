const express = require("express");
const router = express.Router();
const fs = require("fs");

// FROM PASSPORT TUTORIAL
const passport = require("passport");
const localStrategy = require("passport-local");
const crypto = require("crypto");
const { removeListener } = require("process");
const { kStringMaxLength } = require("buffer");
const knex = require("knex")(require("../knexfile.js").development);

// DB require goes here.

// FROM PASSPORT TUTORIAL: This configures the LocalStrategy to
// fetch the user record from the app's database and verify the hashed
// password against the password submitted by the user. If that succeeds,
//  the password is valid and the user is authenticated.

passport.use(
  new localStrategy(function verify(username, password, cb) {
    db.get(
      "SELECT * FROM users WHERE username = ?",
      [username],
      function (err, row) {
        if (err) {
          return cb(err);
        }
        if (!row) {
          return cb(null, false, {
            message: "Incorrect username or password.",
          });
        }

        crypto.pbkdf2(
          password,
          row.salt,
          310000,
          32,
          "sha256",
          function (err, hashedPassword) {
            if (err) {
              return cb(err);
            }
            if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
              return cb(null, false, {
                message: "Incorrect username or password.",
              });
            }
            return cb(null, row);
          }
        );
      }
    );
  })
);

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
  console.log("signup route");
  console.log(req.body);
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;

  knex("users")
    .insert({
      username: "apples",
      // email: email,
      // password: password,
    })
    .then((data) => {
      let user = {
        id: data.id,
        username: data.username,
      };
      req.login(user, function (err) {
        if (err) {
          return next(err);
        }
        res.redirect("/");
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error getting users");
    });
});

// router.post('/signup', function(req, res, next) {
//   var salt = crypto.randomBytes(16);
//   crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', function(err, hashedPassword) {
//     if (err) { return next(err); }
//     db.run('INSERT INTO users (username, hashed_password, salt) VALUES (?, ?, ?)', [
//       req.body.username,
//       hashedPassword,
//       salt
//     ], function(err) {
//       if (err) { return next(err); }
//       var user = {
//         id: this.lastID,
//         username: req.body.username
//       };
//       req.login(user, function(err) {
//         if (err) { return next(err); }
//         res.redirect('/');
//       });
//     });
//   });
// });

// router.post(
//   "/login/password",
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//   })
// );
module.exports = router;
