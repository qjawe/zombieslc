// This JS script is to load expressJS and path
var path = require ("path");
var express = require ("express");
// var bodyParser = require('body-parser');

// This create an instance of express app
var app = express();

// set the directory of the publick folder
//const BOWER_DIR = path.join(__dirname + "/bower_components");
const FINAL_PATH = path.join(__dirname + "/public");
console.log(FINAL_PATH);
// List Final Path and back to static
app.use(express.static(FINAL_PATH));
app.use("/bower_components", express.static(__dirname + "/bower_components"));


//Configure the port
app.set("port", process.env.APP_PORR | 3000);
  console.log("Express server listening on port 3000");

//Start the expressjs server
app.listen(app.get("port"), function() {
    console.log("Application started at %s on port %d"
            , new Date(), app.get("port"));
});
