// Using the connection.js file that was exported earlier
var connection = require("./connection.js");

// Creating orm
var orm = {
   selectAll: function (table, cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [table],
         function (error, result) {
            if (error)
               throw error;
            cb(result);
         });
   },
   insertOne: function (table, columnName, name, cb) {
      var queryString = "INSERT INTO ?? (?) VALUES ??";
      connection.query(queryString, [table, columnName, name], function (error, result) {
         if (error) throw error;
         cb(result);
      });
   },
   updateOne: function (table, column1, value1, condition, cb) {
      var queryString = "UPDATE ?? SET ?? = ?? WHERE ??";
      connection.query(queryString, [table, column1, value1, condition], function (error, result) {
         if (error)
            throw error;
         cb(result);
      })
   }
};

// Exporting orm.js for use in other files
module.exports = orm;