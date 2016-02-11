var app = app || {};

(function ($) {
	'use strict';
	app.TaskView = Backbone.View.extend({
		tagName:  'li',
		className: 'list-group-item',
		template: Handlebars.compile($('#task_template').html()),
		events: {
			'click .toggle': 'toggleCompleted',
			'click .task-title': 'edit',
			'click .destroy': 'clear',
			'keypress .edit': 'updateOnEnter',
			'keydown .edit': 'revertOnEscape',
			'blur .edit': 'saveOnBlur'
		},
		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},
		render: function () {
			if (this.model.changed.id !== undefined) {
				return;
			}

			this.$el.html(this.template(this.model.toJSON()));
			this.$el.toggleClass('completed', this.model.get('completed'));
			this.$input = this.$('.edit');
			return this;
		},
		toggleCompleted: function () {
			this.model.toggle();
		},
		edit: function () {
			this.$el.addClass('editing');
			this.$input.focus();
		},
		close: function () {
			var value = this.$input.val();
			var trimmedValue = value.trim();
			
			if (!this.$el.hasClass('editing')) {
				return;
			}
			this.$el.addClass('savingggg');
			if (trimmedValue) {
				this.model.save({ title: trimmedValue });
			} else {
				this.clear();
			}
			
			this.$el.removeClass('editing');
			this.$el.removeClass('savingggg');
			
		},
		saveOnBlur: function(e) {
			if(!this.$el.hasClass('savingggg')) {
				this.close();
			}
		},
		updateOnEnter: function (e) {
			if (e.which === ENTER_KEY) {
				this.close();
			}
		},
		revertOnEscape: function (e) {
			if (e.which === ESC_KEY) {
				this.$el.removeClass('editing');
				this.$input.val(this.model.get('title'));
			}
		},
		clear: function () {
			this.model.destroy();
		}
	});
})(jQuery);