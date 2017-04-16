'use strict';

// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var mongoose = require('mongoose');
mongoose.connect('mongodb://ramon:ramon@ds159330.mlab.com:59330/consultant'); // connect to our database

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log('uhuuul connected');
});


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router
var bearRoutes = require('./app/routes/bear');
// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});

// REGISTER OUR ROUTES -------------------------------
app.use('/api', [router, bearRoutes]);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);