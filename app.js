// Karthik's TODO application to use MEAN Stack !!! with Authentication and File uploads

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');  //default will look for index.js in the folder
var setupController = require('./controllers/setupController');
var port = process.env.port || 3000;
var apiController = require('./controllers/apiController');

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
mongoose.connect(config.getDbConnectionString());

setupController(app);
apiController(app);

app.listen(port);