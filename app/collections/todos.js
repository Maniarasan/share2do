var app = app || {};

(function () {
	'use strict';
	var Todos = Backbone.Collection.extend({
		model: app.Todo,
		localStorage: new Backbone.LocalStorage('todos-backbone-demo'),
	});
	app.todos = new Todos();
})();