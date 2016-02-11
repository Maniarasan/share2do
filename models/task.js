'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean,
  todoId: Schema.ObjectId
});

module.exports = mongoose.model('Task', TaskSchema);
