"use strict";

var express = require('express');
var router = express.Router();
var todos = require('../../mock/todos.json')
router.get('/todos', function(req, res){
  res.json({todos: todos});
});

// Add POST route to create new entries

// Add PUT route to update existing entries

// Add DELETE route to delete entries

module.exports = router;
