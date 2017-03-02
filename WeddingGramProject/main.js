/**** List of library Start ****
bower install
    - angular
    - bootstrap
    - font-awesome
    - jquery
    - ng-file-upload
    - ng-file-upload-shim

npm install
    - aws-sdk
    - body-parser
    - express
    - fs
    - multer
    - multer-s3
    - path
**** List of library End****/

//Load library
var express = require("express");
var path = require("path");

//Create an instance of express app
var app = express();

//master guest list
var allGuest = [];
var createAttList = function(attList){
    return({
        name: attList.name,
		noPax: attList.noPax,
		emailAdd: attList.emailAdd,
		attend: attList.attend
    });
};

//master photo&comment list
var allPhoto = [];
var createPhList = function(phList){
    return({
        photo: phList.photo,
		phComment: phList.phComment,
    });
};

//---> ADDED JAY
var allOrders = [];



var createRSVP = function(abc) {
    return ({
        name: abc.name,
        email: abc.email,
        tickets: abc.tickets,
        att: abc.att,
    });
}

// ADDED JAY END <-----




// config the port
app.set("port", parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000);

//For attendance --> parameters are going to be in a query string
app.get("/setAttList", function(req, res) {
    allGuest.push(createAttList(req.query));
	//console.log("All guest list:\n %s", JSON.stringify(allGuest));
	res.status(201).end();
});

//For photo&comment --> parameters are going to be in a query string
app.get("/setPhList", function(req, res) {
    allPhoto.push(createPhList(req.query));
	res.status(201).end();
})

//---> ADDED JAY

app.get("/rsvp", function(req, resp) {

    allOrders.push(createRSVP(req.query));
    //consle.log(allOrders)
    //console.log("-----")
    resp.status(201).end();

});


app.get("/rsvp-pending", function(req, resp) {
//  console.log(allOrders)
    resp.status(200);
    resp.type("application/json");
    resp.json(allOrders);
});

// ADDED JAY END <-----



//Define routes, load the static resources from the following directory
app.use("/libs", express.static(path.join(__dirname, "bower_components"))); //setting the path for /libs folder
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/image")));


// Start the server
app.listen(app.get("port"), function(){
    console.log("Application started at port --> %d" , app.get("port"));
    console.log("Application started on --> %s" , new Date());
});