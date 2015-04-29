;(function(){
'use strict';

    window.APPNAME = {
        version: '0.0.0' // leave as is, this is auto updated by grunt
    };

    angular.module('APPNAME',
        [
            'ngRoute',
            'ngAnimate',
            'ngTouch'
        ]
    );

    window.App = angular.module('APPNAME');

    /**
     * Execute App
     */
    window.App.run(run);

    function run() {

    }

})();