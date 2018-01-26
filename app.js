var express = require('express');
var app =express();
var db= require('./models/db.js');
var bodyParser =require('body-parser');
var mongoose = require('mongoose');


var routes = require('./routes/routes.js');






app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));




app.get('/', function(req, res){
    console.log('Request received');
  res.sendFile(__dirname + '/index.html');
});

app.use('',routes);


var port = process.env.PORT||3030;
var server =app.listen(port,function(req,res){
   console.log(`Server started at port ${port}`) 
});