// Using the orm.js file that was exported earlier
var orm = require("../config/orm.js")

// Calling the orm functions
orm.selectAll("burgers");
orm.insertOne("burgers", "burger_name", "Mushroom");
orm.updateOne("burgers", "burger_name", "Mushroom", "Blue Grenadier");

module.exports = burger;