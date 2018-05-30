var mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
  name : String,
  firstname : String,
  group : Number
});

const dbConnection = require('../controllers/db');
var Students = dbConnection.model('Student',studentSchema,'students');


module.exports.schema = studentSchema;
module.exports.model = Students;
