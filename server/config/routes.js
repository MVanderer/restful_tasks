const tasks=require('../controllers/tasks.js')

module.exports = function(app){
    app.get('/',function(req,res){
        tasks.returnAll(req,res);
    });

    app.get('/tasks',function(req,res){
        tasks.returnAll(req,res);
    });

    app.get('/tasks/:id',function(req,res){
        tasks.returnOne(req,res);
    });

    app.post('/tasks',function(req,res){
        tasks.postNew(req,res);
    });

    app.put('/tasks/:id',function(req,res){
        tasks.updateOne(req,res);
    });

    app.delete('/tasks/:id',function(req,res){
        tasks.destroyOne(req,res);
    });

}