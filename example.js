// Required modules:
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');

var app = express();

/** Request Parsing Middleware: **/
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
app.use(multer());
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

app.listen(3000);

console.log('Listening now...');
