var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var itemRoutes = require('./routes/items');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


app.get('/', function(req,res){
	res.sendFile("index.html");
});

app.use('/api/items', itemRoutes);


app.listen(3000, function(){
	console.log('App is running on port ' + 3000);
})