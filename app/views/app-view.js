/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
	'use strict';
	app.AppView = Backbone.View.extend({
		el: '.todoapp',
		initialize: function () {
			app.todos.fetch();
			var todo = _.first(app.todos.models);
			console.log(todo);
			if (todo == undefined) {
				todo = new app.Todo();
				app.todos.push(todo);
			}
			(new app.TodoView({model: todo})).render();
			
		},
		render: function () {
			return this;
		}
	});
})(jQuery);