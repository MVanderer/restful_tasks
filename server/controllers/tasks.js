const mongoose = require('mongoose');
require('../models/task.js');
const Task = mongoose.model('Task');

module.exports = {
    returnAll:(req,res)=>{
        console.log('Requesting all');
        Task.find({},function(error,task){
            if (error){res.json(error);}
            else {res.json(task);}
        });
    },
    returnOne:(req,res)=>{
        console.log('Requesting one');
        Task.findOne({_id:req.params.id},function(error,task){
            if (error){res.json(error);}
            else {res.json(task);}
        });
    },
    postNew:(req,res)=>{
        console.log('Posting a new one');
        let task = new Task(req.body);
        task.save((err)=>{
            if (err){res.json(err);}
            else {res.redirect('/');}
        })
    },
    updateOne:(req,res)=>{
        Task.updateOne({_id:req.params.id},{completed:req.body.completed},(err,raw)=>{
            if (err){res.json(err);}
            else {res.redirect('/');}
        });
    },
    destroyOne:(req,res)=>{
        console.log('Remove one by id');
        Task.findOneAndDelete({_id:req.params.id},(err)=>{
            if (err){res.json(err);}
            else {res.redirect('/')}
        });
    },
}