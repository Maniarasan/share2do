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
var delete_todo = require('./routes/delete-todo');
var update_task = require('./routes/update-task');

var defaultPath = '/todo-api';
var defaultTaskPath = '/todos/:id/tasks';
var defaultRetrieveTaskPath = '/todos/:id/tasks';
var deletePath = '/delete-todo-api';
var defaultUpdateTaskPath = '/updateTask-api';

app.get(deletePath, delete_todo);
app.get(defaultPath, post_todo);

app.get(defaultRetrieveTaskPath, retrieve_task);
app.get(defaultUpdateTaskPath, update_task);

app.post(defaultTaskPath, post_task);


console.log("Server Init: Listening @ 3100")
app.listen(3100);
