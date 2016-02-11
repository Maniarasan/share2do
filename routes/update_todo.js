'use strict';

var Todo = require('../models/todo');

module.exports = function (req, res) {
  Todo.findOne({_id: req.params.id}, '', function (err, todo) {
    if (err) { console.log(err); }
    todo.title = req.body.title;
    todo.save(function (err, todo) {
		if (err) { console.log(err); }
		res.json(todo);
	});
  });	
};


