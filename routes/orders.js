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

router.post("/orders", (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let host_id = req.body.host_id;
  let status = req.body.status;

  knex("orders")
    .insert({
      id: id,
      name: name,
      host_id: host_id,
      status: status,
    })
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

router.post("/participants", (req, res) => {
  let id = req.body.id;
  let user_id = req.body.user_id;
  let order_id = req.body.order_id;
  let isHost = req.body.isHost;

  knex("participants")
    .insert({
      id: id,
      user_id: user_id,
      order_id: order_id,
      isHost: isHost,
    })
    .then((data) => {
      res.json(data);
    });
});

module.exports = router;
