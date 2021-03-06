 
 const express = require("express");
 const burger = require("../models/burger.js");
 const router = express.Router();

 router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
 
  router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, "0"
    ], function(result) {
        res.json({id: result.instertID});

    });
  });
 
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
 
    console.log("condition", condition);
 
    burger.updateOne({
      devoured: "1"
    }, condition, function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
 
  module.exports = router;
