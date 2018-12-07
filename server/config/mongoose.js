var path= require('path');
let fs = require('fs');

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_tasks');
mongoose.Promise = global.Promise;

let models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js')>=0){
        require(models_path + '/'+file);
    }
});