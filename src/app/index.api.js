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
        api.createUser = function(email, password) {
            return $http.post(api.baseUrl + 'users.json', {
                user: {
                    email: email,
                    password: password
                }
            }).success(function(res) {
                console.log('Success ---', res);
            }).error(function(err) {
                console.error(err);
            })
        }


        // $resource(api.baseUrl + 'users.json', {
        //     user: {
        //         email: '@email',
        //         password: '@password'
        //     }
        // });

        return api;
    }

})();