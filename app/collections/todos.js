var app = app || {};

(function () {
  'use strict';
  var Todos = Backbone.Collection.extend({
    model: app.Todo,
    url: '/todos',
  });
  app.todos = new Todos();
})();