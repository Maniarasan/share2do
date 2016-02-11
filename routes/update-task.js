'use strict';

var Task = require('../models/task');
module.exports = function (req, res) {
  Task.findOne({_id: req.params.taskid}, '', function (err, task) {
    if (err) { console.log(err); }
    task.title = req.body.title;
    task.completed = req.body.completed;
    task.save(function (err, task) {
		if (err) { console.log(err); }
		res.json(task);
	});
  });
};


