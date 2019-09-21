// Requiring the npm package express
var express = require("express");

// Using the file burger.js which was exported earlier
var burgers = require("../models/burger.js");

// Creating the router for the app
var router = express.Router();

// Creating the routes
router.get("/", function (req, res) {
   res.redirect("burgers");
});

// Route for Index Page (Main)
router.get("/burgers", function (req, res) {
   burgers.selectAll(function (result) {
      var hbsObject = {
         burgers: result
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
   });
});

// Route for Creating burgers
router.post("/burgers/create", function (req, res) {
   // console.log(req.body)
   burgers.insertOne([req.body.burger_name], function (result) {
      res.redirect("/burgers");
   });
});

// Route for Devouring burgers 
router.put("/burgers/update/:id", function (req, res) {
   console.log(req.params.id);
   burgers.updateOne(true, [req.params.id], function (result) {
      // console.log('result ******', result)
      res.redirect("/burgers");
   });
});

// Exporting router for later use in other files
module.exports = router;