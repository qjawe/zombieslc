//Load express and path
var path = require("path");
var express = require("express");

//Create an instance of express app
var app = express();

//Configure port
// var port = 0;





//Print out the elements in process.argv
// for (var i=0; i< process.argv.length; i++){
//     var myargv = process.argv[i];
//     console.log("argv[%d] = %s type = %s",i,myargv,typeof(myargv[i]));
// }

// var strPort = process.argv[2];

// if (!strPort){
//     port = 3000;
// }else{
//     port = parseInt(strPort);

// }

app.set ("port",
   parseInt(process.argv[2] || 3000));



console.log("strPort: %s",typeof strPort);
console.log("port: %s, type=%s ", port, typeof port);
