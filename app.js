var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/', upload.array(), function(req, res){
	console.log('POST request from client...', req.body)
	res.send("something")
})

app.use(express.static(path.join(__dirname, 'assets')));

app.listen(port)

console.log('Listening on port', port);