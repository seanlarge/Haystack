(function() {
    'use strict';

    angular
        .module('fuse')
        .factory('api', apiService);

    /** @ngInject */
    function apiService($resource, $http) {

        var api = {};

        // Base Url
        api.baseUrl = 'https://shophaystack.herokuapp.com/';


        // create user
        api.createUser = $resource(api.basUrl + 'auth')

        api.login = $resource(api.baseUrl + 'login');
        /*
         api.dashboard = {
         project  : $resource(api.baseUrl + 'dashboard/project/data.json'),
         server   : $resource(api.baseUrl + 'dashboard/server/data.json'),
         analytics: $resource(api.baseUrl + 'dashboard/analytics/data.json')
         };
         */
        // $resource(api.baseUrl + 'users.json', {
        //     user: {
        //         email: '@email',
        //         password: '@password'
        //     }
        // });

        return api;
    }

})();