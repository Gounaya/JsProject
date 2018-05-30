var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

// import controller for books
var studentsController = require('../controllers/students');


router.get('/', studentsController.list);
