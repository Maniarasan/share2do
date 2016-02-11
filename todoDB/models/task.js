'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  title: String,
  description: String,
  status: String,
  objectId: Schema.ObjectId
});

module.exports = mongoose.model('Task', TaskSchema);
