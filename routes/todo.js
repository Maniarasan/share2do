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

module.exports = router;
