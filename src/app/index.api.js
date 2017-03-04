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


        //  registration and authentication
        api.createUser = $resource(api.baseUrl + 'auth')

        api.establishSession = $resource(api.baseUrl + 'auth/sign_in');

        api.logout = $resource(api.baseUrl + 'auth/sign_out', {},{
            delete: {
                headers: {
                'access-token': $http.defaults.headers['access-token'], 
                client: $http.defaults.headers.client, 
                 uid: $http.defaults.headers.uid
                }
            }
        });
        // {
        //     'get': { method: 'GET' },
        //     'save': { method: 'POST' },
        //     'query': { method: 'GET', isArray: true },
        //     'remove': { method: 'DELETE' },
        //     'delete': { method: 'DELETE' }
        // };
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