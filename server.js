import app from './src/app';
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
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
