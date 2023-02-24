const express = require("express");
const router = express.Router();
const fs = require("fs");
const knex = require("knex")(require("../knexfile.js").development);

// Get items purchased by user signed in
router.get("/purchased", (req, res) => {
  knex
    .select("*")
    .from("items")
    .then((data) => {
      res.json(data);
    });
});
module.exports = router;
