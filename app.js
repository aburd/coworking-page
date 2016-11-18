var path = require('path');
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
})

app.use(express.static(path.join(__dirname, 'assets')));

app.listen(port)

console.log('Listening on port', port);