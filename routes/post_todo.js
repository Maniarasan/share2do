'use strict';

var Todo = require('../models/todo');

var post = function (req, res) {
  var todo = new Todo({});
  todo.save({}, function (err, todoData) {
    if (err) { console.log(err); }
    res.redirect('/todos/' + todoData._id );
    res.end();
  });
};

module.exports = post;
