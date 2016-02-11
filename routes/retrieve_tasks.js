'use strict';

var Task = require('../models/task');

var taskList = function (req, res) {
	var todoId = req.params.id;
  Task.find({todoId:todoId}, function (err, result) {
    if (err) {console.log(err)}
    res.json(result);
  });
};

module.exports = taskList;
