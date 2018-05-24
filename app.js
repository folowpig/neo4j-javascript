var express = require('express')
	, path = require('path')
	, logger = require('morgan')
	, bodyParser = require('body-parser')
	, neo4j = require('neo4j-driver').v1;
	
var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', '123456'));
var session = driver.session();

app.get('/', function(req, res){
	session
		.run() //Cypher query
		.then(function(result){
			result.records.forEach(function(record){
				console.log(record);
			});
		}) //
		.catch(function(err){
			console.log(err);
		});
	res.send('It works partially');
});

app.listen(3000);
console.log('Server started on Port#: 3000');

module.exports = app;
//var txUrl = "http://localhost:7474/db/data/transaction/commit";