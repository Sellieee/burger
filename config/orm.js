// Using the connection.js file that was exported earlier
var connection = require("./connection.js");

// Creating orm
var orm = {
   selectAll: function (cb) {
      var queryString = "SELECT * FROM ";
      connection.query(queryString,
         function (error, result) {
            if (error)
               throw error;
            cb(result);
         });
   },
   insertOne: function (name, cb) {
      var queryString = "INSERT INTO burgers SET (?)";
      connection.query(queryString, [name], function (error, result) {
         if (error) throw error;
         cb(result);
      });
   },
   updateOne: function (devoured, burger_id, cb) {
      var queryString = "UPDATE burgers SET ?? WHERE ??";
      connection.query(queryString, [devoured, burger_id], function (error, result) {
         if (error)
            throw error;
         cb(result);
      })
   }
};

// Exporting orm.js for use in other files
module.exports = orm;