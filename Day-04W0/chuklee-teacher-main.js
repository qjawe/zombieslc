//Load the libraries
var express = require("express");
var path = require("path");

//Create an instance of the app
var app = express();

//Define routes
// /employee/1 /employee/2
app.get("/employee/:empNo", function(req, resp) {

    var empNo = req.params.empNo;
    //Retrieve data from database

    //resp.status(200)
    //resp.type(req.get("Accept"));

    console.log("Accept header: %s", req.get("Accept"));

    switch (req.get("Accept").toLowerCase()) {

        default:
        case "text/plain":
            resp.status(200)
            resp.type("text/plain")
            resp.send("Name: fred, email: fred@gmai.com, empNo: " + empNo);
            break;

        case "application/json":
            resp.status(200)
            resp.type("application/json")
            resp.json({
                name: "Fred",
                email: "fred@gmai.com",
                empNo: empNo
            });
            break;

    }
});

app.get("/employee/:empNo/:infoType", function(req, resp) {

    var empNo = req.params.empNo;
    var infoType = req.params.infoType;
    //Process empNo

    resp.type("text/html")
        .status(200)
        .send("<h3>Employee number " + empNo + " details for " + infoType + "</h3>");

});

app.get("/", function(req, resp) {

    //Get the user agent
    var userAgent = req.get("user-agent");
    var responseMessage = "<h2>You are using <code>" + userAgent + "</code></h2>";

    //Send response back
    resp.type("text/html");
    resp.status(200);
    resp.send(responseMessage);
});

//Configure the port
app.set("port", process.env.APP_PORR | 3000);

//Start the server
app.listen(app.get("port"), function() {
    console.log("Application started at %s on port %d"
            , new Date(), app.get("port"));
});
