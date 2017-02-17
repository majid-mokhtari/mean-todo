"use strict";

var express = require('express');
var parser = require('body-parser');
var router = require('./api');
var app = express();

require('./database');
require('./seed');

// set root path to pull angular app from public folder
app.use('/', express.static('public'));

// tell express to use body parser on POST
app.use(parser.json());

// add api namespace to avoid path conflict
app.use('/api', router);

app.listen(3000, function(){
  console.log("The server is running on port 3000")
});
