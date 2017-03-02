// This JS script is to load expressJS and path
var path = require ("path");
var express = require ("express");
var bodyParser = require('body-parser');

// This create an instance of express app
var app = express();
app.use(express.static(__dirname + "/public") );
//app.use(express.static(__dirname + "/bower_components"));
console.log("...");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Hard loading bower.io libaries to the /bower_components



// Define route of the path
//app.get("/", function(req,resp) {});


//Define routes
// /employee/1 /employee/2
/* app.get("/employee/:empNo", function(req, resp) {

    console.log("req --> " + req);
    var empNo = req.params.empNo;
    //Retrieve data from database

    //resp.status(200)
    //resp.type(req.get("Accept"));

    console.log("Accept header: %s", req.get("Accept"));

    switch (req.get("Accept").toLowerCase()) {

        case "text/plain":
            console.log(" text plain");
            resp.status(200)
            resp.type("text/plain")
            resp.send("Name: JC, email: qqjawe@gmail.com, empNo: " + empNo);
            break;

        case "application/json":
             console.log(" json ");
            resp.status(200)
            resp.type("application/json")
            resp.json({
                name: "JC Awe 2222",
                email: "qqjawe@gmail.com",
                empNo: empNo
            });
            break;

        // default:
        //     console.log("default");
        //     resp.status(200);
        //     resp.redirect("<b> hello world </b><br><img src=\"Public/img/Cards/Modern/c01.png\"></img>");

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

/*
app.get("/", function(req, resp) {

    //Get the user agent of the client end
    var userAgent = req.get("user-agent");
    var responseMessage = "<h2>You are using <code>" + userAgent + "</code></h2>";

    //Send response back on the http
    resp.type("text/html");
    resp.status(200);
    resp.send(responseMessage);
});*/

//Configure the port
app.set("port", process.env.APP_PORR | 3000);
  console.log("Express server listening on port 3000");

//Start the expressjs server
app.listen(app.get("port"), function() {
    console.log("Application started at %s on port %d"
            , new Date(), app.get("port"));
});
