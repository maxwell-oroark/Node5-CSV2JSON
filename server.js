//Requires//
var express = require('express')
var request = require('request')
var logger = require('morgan')
var bodyParser = require('body-parser')
var fs = require('fs')

var csv = fs.readFileSync('myCSVfile.csv','utf-8', function(err, data){
	if (err) throw err;
	// console.log(data)
	return data
})

//Controllers//
var csvController = require('./controllers/controller.js')

//Create express app //
var app = express();

//App config//
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


//Routes
app.get('/', function(req, res){
  res.sendFile('home.html', {root : __dirname + '/public/html'})
});

app.post('/api/csv', function(req, res){
	res.send(csvController.csvToJson(req.body.csv));
	console.log(req.body)
})


// Creating Server and Listening for Connections \\
var port = 3101
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
