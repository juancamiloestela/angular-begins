;(function() {
	'use strict';

	window.App.factory('factoryName', FactoryFunction);

	/* @ngInject */
	function FactoryFunction($http) {

		return {
			method: function(){
				return $http.get(window.APPNAME.apiUrl + '/api.json');
			}
		};
	}
})();
