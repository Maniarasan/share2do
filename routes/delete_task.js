'use strict';

var Task = require('../models/task');

var deleteList = function (req, res) {
  var todoId = req.params.id;
  var taskId = req.params.taskid;

  Task.remove( {_id: taskId}, function (err,num) {
    if (!err) {
      res.json(num);
    } else {
      console.log(err);
    }
  });
};

module.exports = deleteList;
