// Dependencies
var connection = require("./connection.js");

var orm = {
	// Selects everything from a table
	selectAll:function(table,cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString,[table],function(err,res) {
			if (err) throw err;
			cb(res);
		});
	},

	// Inserts a new element into a table
	insertOne:function(table,rowData,cb) {
		var queryString = "INSERT INTO ?? SET ?";
		connection.query(queryString,[table,rowData],function(err,res) {
			if (err) throw err;
			cb(res);
		});
	},

	// Changes data for a row in a table
	updateOne:function(table,newRowData,rowID,cb) {
		var queryString = "UPDATE ?? SET ? WHERE ?";
		connection.query(queryString,[table,newRowData,{id:rowID}],function(err,res) {
			if (err) throw err;
			cb(res);
		});
	}
};

module.exports = orm;