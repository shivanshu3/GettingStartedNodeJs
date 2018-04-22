// Required modules:
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');

var app = express();

// for parsing multipart/form-data
var multerUpload = multer({storage: multer.memoryStorage(), files: 1, fileSize: 16*1024*1024});

/** Request Parsing Middleware: **/
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing cookies:
app.use(cookieParser());

// Enable cross origin requests:
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// GET Params example:
app.get('/paramsexample/:name', function(req, res) {
    res.send(req.params);
    console.log('Params Example Served');
});

// GET query example:
app.get('/getexample', function(req, res) {
    res.send(req.query);
    console.log('Get Example Served');
});

// POST query example:
app.post('/postexample', function (req, res) {
    res.send(req.body);
    console.log('Post Example Served');
});

// GET cookie example
app.get('/cookies', function(req, res) {
    res.send(req.cookies);
    console.log('Cookies Example Served');
});

// POST file upload example
app.post('/upload', multerUpload.single('fileProp'), function(req, res) {
    var fileSize = req.file.buffer.length;
    var mimeType = req.file.mimetype;
    res.send(fileSize + ' bytes file received of ' + mimeType);
    console.log('Upload Example Served');
});

app.listen(3000);

console.log('Listening now...');
