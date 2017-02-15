"use strict";

var express = require('express');
var Todo = require('../models/todo');
//var todos = require('../../mock/todos.json');
var router = express.Router();
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

// Add DELETE route to delete entries

module.exports = router;
