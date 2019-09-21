// Requiring the mysql npm package
var mysql = require("mysql");

//Creating a pool since Heroku logs throws me the following error:
// Error: Cannot enqueue Query after fatal error
var pool = mysql.createPool({
   connectionLimit: 10,
   host: "localost",
   user: "root",
   password: "root",
   database: "burgers_db"
});

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
   if (error) throw error;
   console.log('The solution is: ', results[0].solution);
});

pool.getConnection(function (err, connection) {
   if (error) {
      console.log("Error connecting: " + error.stack);
      return;
   };
   console.log("Connected as ID: " + connection.threadId);
});

// Stating the details required to establish the connection
// var connection = mysql.createConnection({
//    host: "localhost",
//    port: 3306,
//    user: "root",
//    password: "root",
//    database: "burgers_db"
// });

// Connect to the database
// connection.connect(function (error) {
//    if (error) {
//       console.log("Error connecting: " + error.stack);
//       return;
//    };
//    console.log("Connected as ID: " + connection.threadId);
// });

// Export this file for use in other files
module.exports = connection;