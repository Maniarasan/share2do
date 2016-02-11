'use strict';

var Task = require('../models/task');

var post = function (req, res) {
  console.log(req);
  var data = req.body;
  var todoId = req.params.id;
  data.todoId = todoId;

var task = new Task(data);
  task.save(function (err, savedData) {
    if (err) { console.log(err); }
    res.json(savedData);
  });
};

module.exports = post;
