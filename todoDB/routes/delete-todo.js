'use strict';

var Task = require('../models/task');

var deleteList = function (req, res) {
  Task.remove({_id: '56bc0b88d33878180b159427'}, function (err) {
    if (!err) {
      console.log('deleted');
    } else {
      console.log(err);
    }
  });
};

module.exports = deleteList;
