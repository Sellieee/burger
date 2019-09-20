// Using the npm package express
var express = require("express");

var PORT = process.env.PORT || 8989;

var app = express();

// Use the express handlebars npm package
var exphbs = require("express-handlebars");

// Serve static content from the public directory
app.use(express.static("public"));

// Middleware
app.use(express.urlencoded({
   extended: true
}));
app.use(express.json());

app.engine("handlebars", exphbs({
   defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burger_controller.js")

app.use(routes);

app.listen(PORT, function () {
   console.log("Server listening on: http://localhost:" + PORT);
});