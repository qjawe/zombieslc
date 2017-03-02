// load the nodejs modules libraries
var express = require("express");
var path = require("path");

// Print node libraries and call them..
// console.log(">>> express: " + express);
// console.log(">>> path: " + path);

// ___________________________________________
// Create an instance of express application on the back end of the server.
var app = express();

// Set the URL port to 3000
app.set("port", 3000);


// create the web server directory to public
app.use(express.static(__dirname + "/public"));

app.use(function (req, resp) {
  resp.status(404);
  resp.type("text.html"); // Representation of the redirection file
  resp.send("<h1>File not found</h1><p>The current time is " + new Date() + "</p>");

});

// server 404 file not found them what happen?
app.use(function (req, resp) {
  resp.status(404);
  resp.type("text.html"); // Representation of the redirection file
  resp.send("<h1>File not found</h1><p>The current time is " + new Date() + "</p>");

});


// this start the setup the webs server listing at port 3000
app.listen(app.get("port"), function () {
  console.log("this define the web function of the listening at port 3000");


});
