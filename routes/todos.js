var express = require('express')
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res){
    //send all todos from database
    db.Todo.find().then(function(todos){
        res.json(todos); //find todos
    }).catch(function(err){
        res.send(err); //if there's an error
    })
});

router.post('/', function(req, res){
   db.Todo.create(req.body).then(
       function(newTodo){
        res.json(newTodo); // create new todo
       }).catch(function(err){
           res.send(err);
       })
});

router.get('/:todoId', function(req, res){
    db.Todo.findById(req.params.todoId).then(
        function(findTodo){
            res.json(findTodo)
        }).catch(function(err){
            res.send(err);
        })
});

router.put('/:todoId', function(req, res){
    db.Todo.findOneAndUpdate({_id:req.params.todoId}, req.body, {new: true}).then(
        function(updateTodo){
            res.json(updateTodo)
        }).catch(function(err){
            res.send(err);
        })
});

router.delete('/:todoId', function(req, res){
    db.Todo.remove({_id: req.params.todoId}).then(
        function(){
            res.json({message: "We deleted the todo!"})
        }).catch(function(err){
            res.send(err);
        })
});

module.exports = router;