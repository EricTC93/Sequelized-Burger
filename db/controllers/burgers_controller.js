// Dependencies
var express = require("express");
var burger = require("../models/burger.js"); // Database functions

var router = express.Router();

// Lists all the burgers from the database to the page
router.get("/",function(req,res) {
	burger.selectAll(function(data) {
		var handleBarObj = {
			burgers: data
		};
		res.render("index",handleBarObj);
	});
});

// Adds a new burger to the page and the database
router.post("/",function(req,res) {

	if (req.body.burger_name !== "") {

		burger.insertOne({
			burger_name:req.body.burger_name
		}, function() {
			res.redirect("/");
		});

	}
});

// Changes a burger property devoured to true
router.put("/:id", function(req,res) {
	burger.updateOne({
		devoured:1},
	req.params.id, function() {
		res.redirect("/");
	});
});

// Export routes to server.js
module.exports = router;