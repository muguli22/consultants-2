import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const myLogger = (req, res, next) => {
    console.log("Logged");
    next();
}

app.get('/', myLogger, (req, res) => res.send('Hello World!'));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});


// var mongoose = require('mongoose');
// mongoose.connect('mongodb://ramon:ramon@ds159330.mlab.com:59330/consultant'); // connect to our database
//
// var db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'connection error:'));
//
// db.once('open', function () {
//     console.log('uhuuul connected');
// });


// var router = express.Router();              // get an instance of the express Router
// var bearRoutes = require('./app/routes/bear');
//
// router.use(function (req, res, next) {
//
//     console.log('Something is happening.');
//     next(); // make sure we go to the next routes and don't stop here
// });
//
//
// router.get('/', function (req, res) {
//     res.json({message: 'hooray! welcome to our api!'});
// });
//
//
// app.use('/api', [router, bearRoutes]);
