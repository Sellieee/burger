// Using the orm.js file that was exported earlier
// Using the file orm.js which was exported earlier
var orm = require("../config/orm.js")

// Calling the orm functions
var burger = {
   selectAll: function (cb) {
      orm.selectAll(function (res) {
         cb(res);
      });
   },
   updateOne: function (burger_name, cb) {
      orm.updateOne(burger_name, function (res) {
         cb(res);
      });
   },
   insertOne: function (burger_id, cb) {
      orm.insertOne(burger_id, function (res) {
         cb(res);
      });
   };
};

module.exports = burger;