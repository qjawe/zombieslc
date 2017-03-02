
<<<<<<< HEAD

=======
>>>>>>> origin/master

var AWS = require('aws-sdk');
var fs = require('fs');
var zlib = require('zlib');

AWS.config.region = 'ap-southeast-1';
console.log("AWS Bucket init...");
var s3Bucket = new AWS.S3({
   params: {
       Bucket: 'stackup-testimg'
   }
});

s3Bucket.createBucket(function() {
   var params = { Key: 'mykey', Body: 'Hello World'};
   s3Bucket.upload(params, function(err, data) {
       if (err) {
           console.log("Error > " + err);
       }
       else {
           console.log(data);
           console.log("Upload successful!");
       }
   });
});


// Upload
var imageBody = fs.createReadStream('singapore-startup-ecosystem-landscape-1024x822.png');
var s3ImageObj = new AWS.S3 ({ params: {Bucket: 'stackup-testimg', Key:'singapore-startup-ecosystem-landscape-1024x822.png'} });

s3ImageObj.upload({Body: imageBody}).on('httpUploadProgress', function (evt) {
      console.log(evt);
}).send(function (err, data) {
   console.log(data);
});

// Download
var params = {Bucket: 'stackup-testimg', Key: 'singapore-startup-ecosystem-landscape-1024x822.png'};
var newFile = fs.createWriteStream('./singapore-startup-ecosystem-landscape-1024x822-return.png');

s3Bucket.getObject(params).createReadStream().pipe(newFile);
