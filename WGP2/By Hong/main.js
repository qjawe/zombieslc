//Load library
var express = require("express");
var path = require("path");

//Create an instance of express app
var app = express();

var imgUrls = [];


// config the port
app.set("port", parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000);

//
//console.log(">> port: %d", app.get("port"));

// Start the server
app.listen(app.get("port"), function(){
    console.log("Application started at port %d on %s" , app.get("port"), new Date())
});


//Define routes, load the static resources from the following directory
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/image")));
app.use("/libs", express.static(path.join(__dirname, "bower_components"))); //setting the path for /libs folder

app.use(function(req, resp){
    var htmlstring = "<img src='"+ imgUrls[i] + "'>";

    resp.status(200); //HTTP status code
    resp.type("text/html"); //MIME type
    resp.send(htmlstring);
});

app.use(function(req, resp){
    resp.status(404);
    resp.send("Error, file not found");
});
