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

router.get("/orders/:orderID", (req, res) => {
  let orderID = req.params.orderID;

  knex("orders")
    .where({ id: orderID })
    .then((order) => {
      res.json(order);
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

router.get("/participants/:userID", (req, res) => {
  let userID = req.params;
  knex("participants")
    .where({ user_id: userID.userID })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error getting users");
    });
});

router.get("/participants/order/:orderID", (req, res) => {
  let orderID = req.params.orderID;
  knex("participants")
    .where({ order_id: orderID })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error getting users");
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
