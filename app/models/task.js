var app = app || {};

(function () {
	'use strict';
	app.Task = Backbone.Model.extend({
		idAttribute: '_id',
		defaults: {
			title: '',
			completed: false
		},
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		}
	});
})();