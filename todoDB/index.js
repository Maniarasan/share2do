'use strict';

var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db');
var app = express();

var post_todo = require('./routes/post-todo');
var post_task = require('./routes/post-task');
var retrieve_task = require('./routes/retrieve-tasks');
var delete_todo = require('./routes/delete-todo');
var update_task = require('./routes/update-task');

var defaultPath = '/todo-api';
var defaultTaskPath = '/task-api';
var defaultRetrieveTaskPath = '/retrieveTask-api';
var deletePath = '/delete-todo-api';
var defaultUpdateTaskPath = '/updateTask-api';

app.get(deletePath, delete_todo);
app.get(defaultTaskPath, post_task);
app.get(defaultPath, post_todo);
app.get(defaultUpdateTaskPath, update_task);
app.get(defaultRetrieveTaskPath, retrieve_task);

app.listen(3100);
