;(function(){
'use strict';

    window.APPNAME = {
        version: '0.0.0', // leave as is, this is auto updated by grunt
		apiUrl: 'data'
    };

    angular.module('APPNAME',
        [
            'ngRoute',
            'ngAnimate',
            'ngTouch',
			'ngIOS9UIWebViewPatch',
			'ng-fastclick'
        ]
    );

    window.App = angular.module('APPNAME');

    /**
     * Execute App
     */
    window.App.run(run);

	function run($rootScope, $timeout, $location) {
		$rootScope.layout = {};

		$rootScope.$on('$routeChangeStart', function(event, next, current) {

			/**
			 * To make a route secure, set the secure property on the route in config.js
			 */
			if (next && next.$$route && next.$$route.secure){
				console.log('auth required');
				/*if (!User.isLogged()){
					$location.path('/login');
				}
				if (!authService.user.isAuthenticated) {
					$rootScope.$evalAsync(function () {
					   $location.path('/login');
					});
				}*/
			}
		});
	}

})();
