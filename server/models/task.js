let mongoose = require('mongoose');

//The schema
let TaskSchema = new mongoose.Schema({
    title:{type:String,required:true,minlength:3},
    description:{type:String},
    completed:{type:Boolean,default:false},
}, {timestamps:true});

mongoose.model('Task',TaskSchema);
