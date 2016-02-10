var app = app || {};

(function () {
	'use strict';
	var Tasks = Backbone.Collection.extend({
		model: app.Task,
		localStorage: new Backbone.LocalStorage('tasks-backbone'),
		completed: function () {
			return this.where({completed: true});
		}
	});
	app.tasks = new Tasks();
})();