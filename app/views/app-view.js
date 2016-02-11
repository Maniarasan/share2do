/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
	'use strict';
	app.AppView = Backbone.View.extend({
		el: '.todoapp',
		events: {
			'click #add_task': 'addNewTask'
		},
		initialize: function () {
			this.$list = $('.todo-list');
			this.fetchToDoList();
		},
		render: function () {
			return this;
		},
		fetchToDoList: function() {
			if (todo == undefined) {
				todo = new app.Todo();
				app.todos.push(todo);
			}
			(new app.TodoView({model: todo})).render();
			app.tasks.fetch({
				success: $.proxy(this.addAllTasks, this)
			});
		},
		addNewTask: function() {
			var task = new app.Task();
			app.tasks.push(task);
			
			var view = this.addOne(task);
			view.edit();
		},
		addOne: function (task) {
			var view = new app.TaskView({ model: task });
			this.$list.prepend(view.render().el);
			return view;
		},
		addAllTasks: function () {
			this.$list.html('');
			app.tasks.each(this.addOne, this);
		},
	});
})(jQuery);