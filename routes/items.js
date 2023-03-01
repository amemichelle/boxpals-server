const express = require("express");
const router = express.Router();
const fs = require("fs");
const knex = require("knex")(require("../knexfile.js").development);

router.get("/purchased", (req, res) => {
  knex
    .select("*")
    .from("items")
    .then((data) => {
      res.json(data);
    });
});
module.exports = router;

router.post("/purchased", function (req, res) {
  let id = req.body.id;
  let name = req.body.name;
  let img_src = req.body.img_src;
  let item_link = req.body.item_link;
  let price = req.body.price;
  let specifications = req.body.specifications;
  let order_id = req.body.order_id;
  let user_id = req.body.user_id;

  knex("items")
    .insert({
      id: id,
      name: name,
      img_src: img_src,
      item_link: item_link,
      price: price,
      specifications: specifications,
      order_id: order_id,
      user_id: user_id,
    })
    .then((data) => {
      res.json(data);
    });
});
