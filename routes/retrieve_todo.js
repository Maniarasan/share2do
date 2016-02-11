'use strict';

var Todo = require('../models/todo');

module.exports = function(req, res, next) {
  Todo.findOne({_id: req.params.id}, '', function (err, todo) {
    if (err) return handleError(err);
    res.render('todo', {todo: todo});
  }); 
};
