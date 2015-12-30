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
			.when('/something/private', {
                controller: 'index',
                templateUrl: 'partials/index.html',
				secure: true // this makes the router check permissions in app.js run() funct
            })
            .otherwise({ redirectTo: '/' });
    }

})();
