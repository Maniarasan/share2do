var app = app || {};

(function () {
	'use strict';
	app.Todo = Backbone.Model.extend({
		idAttribute: '_id',
		urlRoot: '/todos',
		defaults: {
			title: '',
		}
	});
})();