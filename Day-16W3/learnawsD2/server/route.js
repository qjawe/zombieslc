// now in route.js
var fs = require('fs'),
    path = require('path'),
    multer = require ('multer'),
    AWS = require('aws-sdk'),
    multerS3 = require ('multer-s3'),
    storage= multer.diskStorage({
        destination: './upload_tmp',
        filename: function (req, file, callback){
            console.log(file);
            callback(null, Date.now() + '-' + file.originalname);
        }
    }),
    upload = multer({
        storage: storage
    });

AWS.config.region = 'ap-southeast-1';
console.log("AWS Bucket init .....");
var s3Bucket = new AWS.S3({
    /**  **/
});

var uploadS3 = multer({
    storage: multerS3({
        s3: s3Bucket,
        bucket: 'stackup-testimg',
        metadata: function(req, file, cb){
            console.log(file.fieldname);
            cb(null, {fieldName: file.fieldname});
        },
        key: function(req, file, cb){
            cb(null, Date.now() + '-' + file.originalname);
        }
    })
})

module.exports = function(app){
    app.post("/upload", upload.single("img-file"), function(req, res){
        console.log("Upload ...");
        fs.readFile(req.file.path, function(err, data){
            if(err){
                console.log("Err : ", err);
            }
            res.status(202).json({
                size: req.file.size
            })
        });
    });

    app.post("/uploadS3", uploadS3.single("img-file"), function(req, res){
        console.log("Upload S3...");
        res.send("Successfully uploaded " + req.file.length);
    });
}
