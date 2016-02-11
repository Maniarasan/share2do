'use strict';

var Task = require('../models/task');
var data = {
  title: 'Finish M1 module',
  description: 'Important',
  status: 'Half Done',
  objectId: '56bb251e9243f208117a5ecb'
};

var post = function (req, res) {
  var task = new Task(data);
  task.save(data, function (err) {
    if (err) { console.log(err); }
    res.json('your data is saved');
  });
};

module.exports = post;
