
var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var mongoose = require('mongoose');
var mongo = require('mongodb').MongoClient;
var router = express.Router();
var bodyParser = require("body-parser");

var url = "mongodb://localhost:27017/students";

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


var studentsController = require('./controllers/students');

app.get('/', studentsController.list);

app.post('/insert', function(req, res){
  let student = {
    name:req.body.nameAdd,
    firstname:req.body.firstnameAdd,
    group:req.body.group
  };
  mongo.connect(url, function(err, db){
    db = mongoose.createConnection(url);
    db.collection('students').insertOne(student, function(err, res){
      console.log(('inserted'));
      db.close();
    });
  });
  res.redirect('/');
});

// app.get('*', function(req, res){
//   res.sendFile(__dirname + "/dist/error.html");
// })


var dbConnection = require('./controllers/db.js')

http.listen(3000, function(){
  console.log('listening on *:3000');
});
