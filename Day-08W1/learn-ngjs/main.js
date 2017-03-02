//Load the libraries
var path = require("path");
var express = require("express");

//Create an instance of the application
var app = express();

//master order
var allOrders = [];

//Define routes
//
var createOrder = function(ord) {
	return ({
		from: ord.from,
		to: ord.to,
		notes: ord.notes,
		quantity: ord.quantity,
		flower: ord.flower,
		colours: ord.colours
	});
}

//The parameters are going to be in a query string
app.get("/place-order", function(req, resp) {

	allOrders.push(createOrder(req.query));

	console.log("All orders:\n %s", JSON.stringify(allOrders));

	resp.status(201).end();

});

app.get("/pending-orders", function(req, resp) {
	resp.status(200);
	resp.type("application/json");
	resp.json(allOrders);
});

app.use("/libs", express.static(path.join(__dirname, "bower_components")));

app.use(express.static(path.join(__dirname, "public")));


//Setup the server
app.set("port", process.env.APP_PORT || 3000);

app.listen(app.get("port"), function() {
	console.log("Application started at %s on port %d"
			, new Date(), app.get("port"));
});
