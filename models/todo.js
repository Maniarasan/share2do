'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  title: String,
  created_by: String,
  description: String
});

module.exports = mongoose.model('Todo', TodoSchema);
