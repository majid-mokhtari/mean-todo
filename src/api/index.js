"use strict";

var express = require('express');
var Todo = require('../models/todo');
var router = express.Router();

// Add GET route to read new entries
router.get('/todos', function(req, res){
  // pass empty obj to pull all data
  Todo.find({}, function(err, todos){
      if(err){
        return res.status(500).json({message: arr.message});
      }
      res.json({todos: todos});
  });
});

// Add POST route to create new entries
router.post('/todos', function(req, res){
  var todo = req.body;
  Todo.create(todo, function(err, todo){
    if(err){
      return res.status(500).json({err: err.message});
    }
    res.json({'todo': todo, message: 'Todo Created'});
  })
});

// Add PUT route to update existing entries
router.put('/todos/:id', function(req, res){
  var id = req.params.id;
  var todo = req.body;
  if(todo && todo._id !== id){
    return res.status(500).json({err:"Ids don't match!"})
  }
  Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo){
    if(err){
      return res.status(500).json({err: err.message});
    }
    res.json({'todo': todo, message: 'Todo Updated.'});
  })
});

// Add DELETE route to delete entries
router.delete('/todos/:id', function(req, res){
  var id = req.params.id;
  Todo.findByIdAndRemove(id, function(err){
    if(err){
      return res.status(500).json({err: err.message});
    }
    res.json({'todoId': id, message: 'Todo Deleted.'});
  })
});

module.exports = router;
