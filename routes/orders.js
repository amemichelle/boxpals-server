const express = require("express");
const router = express.Router();
const fs = require("fs");
const knex = require("knex")(require("../knexfile.js").development);

router.get("/orders", (req, res) => {
  knex
    .select("*")
    .from("orders")
    .then((data) => {
      res.json(data);
    });
});

router.get("/participants", (req, res) => {
  knex
    .select("*")
    .from("participants")
    .then((data) => {
      res.json(data);
    });
});

module.exports = router;
