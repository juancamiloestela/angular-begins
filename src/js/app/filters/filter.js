;(function() {
	'use strict';

	window.App.filter('filterName', FilterFunction);

	/* @ngInject */
	function FilterFunction() {
		return function(input) {
			return input;
		};
	}
})();
