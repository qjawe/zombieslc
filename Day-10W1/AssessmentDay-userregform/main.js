// This JS script is to load expressJS and path
var path = require ("path");
var express = require ("express");
// var bodyParser = require('body-parser');

// This create an instance of express app
var app = express();

// set the directory of the public folder
app.use(express.static(__dirname + "/public") );
// set the directory of the bower name = folder at /bower_components
// this is set another name or alias to the target path
// In HTML should set /bower/angular.js == /bower_components/angular.js
app.use("/bower", express.static(__dirname + "/bower_components") );


//Configure the port
app.set("port", process.env.APP_PORR | 3000);
  console.log("Express server listening on port 3000");

//Start the expressjs server
app.listen(app.get("port"), function() {
    console.log("Application started at %s on port %d"
            , new Date(), app.get("port"));
});
