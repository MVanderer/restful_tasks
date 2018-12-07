var express = require("express");
var path= require('path');

var app = express();

const server = app.listen(8000, function () {
    console.log("listening on port 8000");
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

//mongoose stuff
require('./server/config/mongoose.js');

//ROUTES
require('./server/config/routes.js')(app);