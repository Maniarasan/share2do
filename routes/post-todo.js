'use strict';

var Todo = require('../models/todo');
var data = {
  title: 'Our first to',
  created_by: 'Manny3',
  description: 'The best todo ever',
};

var post = function (req, res) {
  var todo = new Todo(data);
  console.log("in post - todo function");
  todo.save(data, function (err) {
    if (err) { console.log(err); }
    res.json('your data is saved');
  });
};

module.exports = post;

