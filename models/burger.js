// Dependencies
var orm = require("../config/orm.js");

var burger = {
	// Select all burgers from database
	selectAll: function(cb) {
		orm.selectAll("burgers",function(res) {
			cb(res);
		});
	},

	// Adds a new burger to the database
	insertOne: function(rowData,cb) {
		orm.insertOne("burgers",rowData,function(res) {
			cb(res);
		});
	},

	// Changes data for a burger specified by an id
	updateOne: function(newRowData,rowID,cb) {
		orm.updateOne("burgers",newRowData,rowID,function(res) {
			cb(res);
		});
	}
}

module.exports = burger;