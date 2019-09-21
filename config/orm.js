// Using the connection.js file that was exported earlier
var connection = require("./connection.js");

// Creating orm
var orm = {
   selectAll: function (cb) {
      var queryString = "SELECT * FROM burgers";

      connection.query(queryString,
         function (error, result) {
            if (error)
               throw error;
            cb(result);
         });
   },
   insertOne: function (burger_name, cb) {
      // console.log('name', burger_name)
      var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
      connection.query(queryString, [burger_name], function (error, result) {
         if (error) throw error;
         cb(result);
      });
   },
   updateOne: function (devoured, burger_id, cb) {
      var queryString = "UPDATE burgers SET devoured=(?) WHERE id=(?)";
      // console.log("devoured", devoured);
      // console.log("id", burger_id);
      connection.query(queryString, [devoured, burger_id], function (error, result) {
         if (error) {
            throw error;
         }
         cb(result);
      })
   }
};

// Exporting orm.js for use in other files
module.exports = orm;