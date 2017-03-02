// mac users
// export AWS_ACCESS_KEY_ID=AKIAJ3VUX4BBAF4XXJZA
// export AWS_SECRET_ACCESS_KEY=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

//windows user
// set AWS_ACCESS_KEY_ID=AKIAIIVVPAZERCWPGTWQ
// set AWS_SECRET_ACCESS_KEY=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

var AWS = require('aws-sdk');
var fs = require('fs');
var zlib = require('zlib');

AWS.config.region = 'ap-southeast-1';
console.log("AWS Bucket init .....");
var s3Bucket = new AWS.S3({
    params: {
        Bucket: 'nus-stackup'
    }
});

s3Bucket.createBucket(function (){
    var params = { Key: 'mykey', Body: 'Hello World'};
    s3Bucket.upload(params, function(err, data){
        if(err){
            console.log("Error > " + err);
        }else{
            console.log(data);
            console.log("Upload successfully !");
        }

    })
})


var imageBody = fs.createReadStream('Rainbow-Lights-on-Marina-Bay-Singapore.jpg');
var s3ImageObj = new AWS.S3({ params: {Bucket: 'nus-stackup', Key:'Rainbow-Lights'}});
console.log(imageBody);
console.log(s3ImageObj);

s3ImageObj.upload({Body: imageBody}).on('httpUploadProgress', function(evt){
    console.log(evt);
}).send(function(err, data){
    console.log(data);
    var params = {Bucket: 'nus-stackup', Key: 'Rainbow-Lights'};
    var newFile = fs.createWriteStream('./new_rainbow_lights.jpg');
    s3Bucket.getObject(params).createReadStream().pipe(newFile);
});


