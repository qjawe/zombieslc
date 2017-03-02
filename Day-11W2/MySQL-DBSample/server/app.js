var express = require("express");

var path = require("path");

var app = express();

const NODE_PORT = process.env.NODE_PORT || 3000;

const CLIENT_FOLDER = path.join(__dirname + '/../client');  // Client Folder == to public directory
const MSG_FOLDER = path.join(CLIENT_FOLDER + '/assets/messages');

app.use(express.static(CLIENT_FOLDER));

app.use(function (req, res) {
    res.status(404).sendFile(path.join(MSG_FOLDER + "/404.html"));
});


app.use(function (err, req, res, next) {
    res.status(501).sendFile(path.join(MSG_FOLDER + '/501.html'));
});



app.listen(NODE_PORT, function () {
    console.log("Server running at http://localhost:" + NODE_PORT);
});
