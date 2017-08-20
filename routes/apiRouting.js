// Dependencies
var db = require("../models");

// Export routes to server.js
module.exports = function(app) {

	// Lists all the burgers from the database to the page
	app.get("/",function(req,res) {
		db.Burger.findAll({}).then(function(data) {
			var handleBarObj = {
				burgers: data
			};
			res.render("index",handleBarObj); 
		});
	});

	// Adds a new burger to the page and the database
	app.post("/",function(req,res) {
		db.Burger.create(req.body).then(function() {
			res.redirect("/");
		});
	});

	// Changes a burger property devoured to true
	app.put("/:id", function(req,res) {

		db.Burger.update(
			req.body,
			// {devoured:1},
			{
				where: {
					id: req.params.id
				}
			}
		).then(function() {
			res.redirect("/");
		});
	});
}