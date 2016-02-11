var app = app || {};

(function () {
  'use strict';
  var Tasks = Backbone.Collection.extend({
    model: app.Task,
    url: "/todos/" + todo.id + "/tasks",
    completed: function () {
      return this.where({completed: true});
    }
  });
  app.tasks = new Tasks();
})();