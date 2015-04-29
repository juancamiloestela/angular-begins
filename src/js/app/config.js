;(function(){
'use strict';

	/**
	 * Configure App
	 */
	window.App.config(config);

	/* @ngInject */
	function config($httpProvider, $routeProvider) {
		// make angular tell the server it is making ajax calls
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // define routes
        $routeProvider
            .when('/', {
                controller: 'index',
                templateUrl: 'partials/index.html'
            })
            .otherwise({ redirectTo: '/' });
    }

})();