var express = require('express');
var router = express.Router();

var Todo = require('../models/todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  var todo = new Todo({});
  todo.save({}, function (err, todoData) {
    if (err) { console.log(err); }
    res.redirect('/todos/' + todoData._id );
    res.end();
  });
});

router.get('/todos/:id', function(req, res, next) {
  Todo.findOne({_id: req.params.id}, '', function (err, todo) {
    if (err) return handleError(err);
    res.render('todo', {todo: todo});
  });	
});

var updateTodo = require('./update_todo');
router.put('/todos/:id', updateTodo);
var retrieve_task = require('./retrieve-tasks');
router.get('/todos/:id/tasks', retrieve_task);
var post_task = require('./post-task');
router.post('/todos/:id/tasks', post_task);

var updateTask = require('./update-task');
router.put('/todos/:id/tasks/:taskid', updateTask);

var deleteTask = require('./delete-task');
router.delete('/todos/:id/tasks/:taskid', deleteTask);

module.exports = router;
