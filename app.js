var express = require('express')
	, path = require('path')
	, logger = require('morgan')
	, bodyParser = require('body-parser');
	
var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
console.log('Server started on Port#: 3000');

module.exports = app;
//var txUrl = "http://localhost:7474/db/data/transaction/commit";