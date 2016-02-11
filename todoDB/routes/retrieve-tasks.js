'use strict';

var Task = require('../models/task');
var data = {
  objectId: '56bb251e9243f208117a5ecb'
};

var taskList = function (req, res) {
  Task.find(data, function (err, result) {
    if (err) { console.log(result); }
    res.json('your data ' + result);
  });
};

module.exports = taskList;
