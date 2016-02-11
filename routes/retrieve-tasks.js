'use strict';

var Task = require('../models/task');

var taskList = function (req, res) {
	console.log(req);
	var todoId = req.params.id;
	  Task.find({todoId:todoId}, function (err, result) {
	    if (err) { }
	    
	    res.json(result);
	  });
};

module.exports = taskList;
