// TODO: Send and retrieve information from server via Angular $http
// TODO: 4. Update handling of /register to match client-side changes
// TODO: 5. In register (employee) handler, return a status instead of a thank you page.
// TODO: 10. Define route that handles GET /employees (request from getAllEmp)
// TODO: 10a. Move vm.employees content from search.controller.js to here

var express = require("express");

var path = require("path");
var bodyParser = require("body-parser");

var app = express();

const NODE_PORT = process.env.NODE_PORT || 3000;

const CLIENT_FOLDER = path.join(__dirname + '/../client');
const MSG_FOLDER = path.join(CLIENT_FOLDER + '/assets/messages');

app.use(express.static(CLIENT_FOLDER));

// TODO: 4.1 Update the body parser type to match the data format sent through $http
// TODO: 4.1a Instead of deleting bodyParser.urlencoded comment it out so you could refer to in the future
// TODO: 4.2 Update register route to route used by client app
// TODO: 10.1 Create the HTTP GET /employees handler

app.use(function (req, res) {
    res.status(404).sendFile(path.join(MSG_FOLDER + "/404.html"));
});

app.use(function (err, req, res, next) {
    res.status(501).sendFile(path.join(MSG_FOLDER + '/501.html'));
});

app.listen(NODE_PORT, function () {
    console.log("Server running at http://localhost:" + NODE_PORT);
});