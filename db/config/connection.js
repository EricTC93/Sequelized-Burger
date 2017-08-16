// Dependencies
var mysql = require("mysql");

// Connection information
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}

else {
	connection = mysql.createConnection({
	  port: 3306,
	  host: "localhost",
	  user: "root",
	  password: "password",
	  database: "burger_db"
	});
}

// Connect to the database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;