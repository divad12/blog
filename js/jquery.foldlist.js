(function($) {
	$.fn.foldList = function(options) {

		// TODO: need more options to make this thing reusable
		// TODO: rename this plugin

		// Default options
		options = $.extend({
			barWidthFactor: 25  // Coefficient of bar width
		}, options);

		var maxSublistChildren = Math.max.apply(null,
			$.makeArray(this.find('ul ul').map(function() {
				return $(this).children().length;
			}))
		);

		// Event delegation for showing/hiding and draw histogram
		this
			// TODO: Selector should only match from first level
			.on('click', 'ul > li > *:first-child', function() {
				$(this).parent()
					.toggleClass('expanded')
					.find('ul')
						.slideToggle('fast');
			})
			.children('ul').find('> li > *:first-child')
				.html(function(index, oldHtml) {
					var sublistLen = $(this).parent().find('ul').children().length,
						preamble = '<span class="preamble" style="position: absolute">Day ' + (index + 1) +
							': ' + sublistLen + ' ideas</span>',
						bar = '<div class="bar" style="position: absolute; left: 0; width: ' +
							(sublistLen * options.barWidthFactor) + 'px"></div>',
						subHeading = '<span class="sub-heading" style="position: absolute;">' +
							bar + oldHtml + '</span>';

					return preamble + subHeading;
				})
				.css('position', 'relative')
				.end().end()
			.find('ul ul')
				.hide();

		// Add the expand and show all buttons
		var container = this,
			toggleAll = function(showOrHide) {
				container.find('> ul > li > *:first-child').each(function() {
					var parent = $(this).parent(),
						ul = parent.find('ul');
					parent.toggleClass('expanded', showOrHide);
					if (ul.is(':visible') !== showOrHide) {
						ul.slideToggle('fast');
					}
				});
			};

		$('<div class="controls">')
			.append('<div class="button">Expand All</div>')
			.append('<div class="button">Collapse All</div>')
			.on('click', '.button', function() {
				toggleAll(/expand/gi.test($(this).text()));
			})
			.prependTo(this);


		return this;
	};
})(jQuery);
