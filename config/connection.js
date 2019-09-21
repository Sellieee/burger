// Requiring the mysql npm package
var mysql = require("mysql");

// Stating the details required to establish the connection
var connection = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root",
   password: "root",
   database: "burgers_db"
});

// Connect to the database
connection.connect(function (error) {
   if (error) {
      console.log("Error connecting: " + error.stack);
      return;
   };
   console.log("Connected as ID: " + connection.threadId);
});

// Export this file for use in other files
module.exports = connection;