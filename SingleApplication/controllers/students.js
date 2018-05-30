var Students = require("../models/Student").model;

var list =
  (req, res) =>
      Students.find()
           .then( allStudents => res.render('students',
                                         { title : 'Student List',
                                           request : 'Students.find()',
                                           students : allStudents } ) );


module.exports.list = list;
