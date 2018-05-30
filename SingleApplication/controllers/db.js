var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var dbURI = 'mongodb://localhost/students';
var dbConnection = mongoose.createConnection(dbURI);


module.exports = dbConnection;


dbConnection.on('connected',function(){
  console.log("connected");
})

dbConnection.on('disconnected',function(){
  console.log("disconnected");
})

dbConnection.on('error',function(){
  console.log("error");
})

module.exports.dbConnection = dbConnection;
