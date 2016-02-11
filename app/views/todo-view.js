var app = app || {};

(function ($) {
	'use strict';
	app.TodoView = Backbone.View.extend({
		el:  '.todoapp',
		events: {
			'keypress .title-input': 'save',
			'keydown .title-input': 'revertOnEscape',
			'click .title-display': 'edit',
			'focusout .title-input': 'revert'
		},
		initialize: function () {
			this.$input = this.$('.title-input');
			this.$titleDisplay = this.$('.title-display');

			this.listenTo(this.model, 'change', this.render);
		},
		render: function () {
			var title = this.model.get('title');
			this.$titleDisplay.html(title);
			this.$input.val(title);
			this.$input.addClass('hide');
			this.$titleDisplay.removeClass('hide');
			if(title == '') {
				this.edit();
			}
			return this;
		},
		edit: function(e) {
			this.$input.removeClass('hide');
			this.$titleDisplay.addClass('hide');
			this.$input.focus();
		},
		save: function (e) {
			if (e.which === ENTER_KEY) {
				var value = this.$input.val();
				var trimmedValue = value.trim();
				if (trimmedValue) {
					this.model.save({ title: trimmedValue });
				} else {
					this.clear();
				}
				
			}
		},
		revert: function(){
			this.render();
		},
		revertOnEscape: function (e) {
			if (e.which === ESC_KEY) {
				this.revert();
			}
		}
	});
})(jQuery);