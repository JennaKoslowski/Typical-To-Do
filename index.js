var express = require('express');
var app = express();
var todoRoutes = require('./routes/todos.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
   res.sendFile(__dirname + '/views/index.html');
});
app.use('/api/todos', todoRoutes);

app.listen(3000, function(){
    console.log("app is running on port 3000");
});