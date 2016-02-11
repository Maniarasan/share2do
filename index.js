'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



mongoose.connect('mongodb://localhost:27017/db');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var post_todo = require('./routes/post-todo');
var post_task = require('./routes/post-task');
var retrieve_task = require('./routes/retrieve-tasks');
var delete_task = require('./routes/delete-task');
 var update_task = require('./routes/update-task');

var defaultPath = '/todo-api';
var defaultTaskPath = '/todos/:id/tasks';
var defaultRetrieveTaskPath = '/todos/:id/tasks';
var deletePath = '/todos/:id/tasks/:taskid';
var defaultUpdateTaskPath = '/todos/:id/tasks/:taskid';


//app.get(deletePath, delete_task);
app.get(defaultPath, post_todo);
// app.get(defaultUpdateTaskPath, update_task);

app.get(defaultRetrieveTaskPath, retrieve_task);
app.post(defaultTaskPath, post_task);
app.delete(deletePath, delete_task);
app.put(defaultUpdateTaskPath, update_task);

console.log("Server Init: Listening @ 3100");
app.listen(3100);
