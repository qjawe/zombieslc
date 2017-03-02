// This JS script is to load expressJS and path
var path = require ("path");
var expressJS = require ("express");

// This create an instance of express app
var app = expressJS();

var message = ["one", "two", "three"]
var msgIdx = 0;

// This is a print out the elements in process.argv
//  process.argv argv is the print out of NodeJS
// console.log(process.argv);
// //return as an array of args
// var argv = process.argv;
// for(var x =0; x < argv.length; x++){
//   console.log(" %d args is %s", x, argv[x]);
// }

// ---------------------------------
// var strPort = process.argv[2];

// if (!strPort){
//     port = 3000;
// }else{
//     port = parseInt(strPort);

// }

// create the web server directory to public
app.use(expressJS.static(__dirname + "/public") );
// this inculded images on the web server also - BUT OPTIONAL!!
// app.use( expressJS.static(__dirname + "/imgs") );

app.use("/imgs", function (req, res) {

  // HTTP return code status
  res.status(200);
  // define MINE file type; when reload the client browsers
  res.type("text.plain");
  // it display the text on the client browers console.log(); or print
  res.send("<h1>" + message[msgIdx] + "</h1>")

  // display the message length of the client browsers
  msgIdx = (msgIdx + 1) % message.length;

})

// this is application of Node JS to set the port to 3000
// Config of the Node JS port to ?
app.set ("port", (parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000));

   // console.log("strPort: %s",typeof strPort);
   // console.log("port: %s, type=%s ", port, typeof port);

// This config is to ask the server to listening at which **** port
app.listen(app.get("port"), function () {
  console.log("application started at %s on %d", new Date(), app.get("port"));
});
