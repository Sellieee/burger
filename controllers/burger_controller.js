// Requiring the npm package express
var express = require("express");

// Using the file burger.js which was exported earlier
var burger = require("../models/burger.js");

// Creating the router for the app
var router = express.Router();

// Creating the routes
router.get("/", function (req, res) {
   res.redirect("/index");
});

// Route for Index Page (Main)
router.get("/", function (req, res) {
   burger.selectAll(function (result) {
      var hbsObject = {
         burger: result
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
   });
});

// Route for Creating burgers
router.post("/burger/create", function (req, res) {
   burger.insertOne([req.body.burger_name], function (result) {
      res.json({
         burger_name: result.burger_name
      });
      result.redirect("/index");
   });
});

// Route for Devouring burgers 
router.put("/burgers/update/:id", function (req, res) {
   burger.updateOne([req.params.id], function (result) {
      if (result.changedRows === 0) {
         return result.status(404).end();
      }
      result.status(200).end();
      result.redirect("/index");
   });
});

// Exporting router for later use in other files
module.exports = router;