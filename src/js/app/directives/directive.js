;(function() {
	'use strict';

	window.App.directive('directiveName', DirectiveFunction);

	/* @ngInject */
	function DirectiveFunction() {
		return {
			restrict: "E",
			replace: true,
			scope: {

			},
			link: function($scope, element, attrs) {

	        }
		};
	}

})();
