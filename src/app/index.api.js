(function() {
    'use strict';

    angular
        .module('fuse')
        .factory('api', apiService);

    /** @ngInject */
    function apiService($resource, $http, $cookies, $location) {

        var api = {};

        // Base Url
        api.baseUrl = 'http://production.pddk5kiaw3.us-east-1.elasticbeanstalk.com/';
        
        //client creation
         api.createClient = $resource(api.baseUrl + 'clients')

        //  registration and authentication
        api.createUser = $resource(api.baseUrl + 'auth')

        api.establishSession = $resource(api.baseUrl + 'auth/sign_in');

        api.logout = function() {
            $http.delete(api.baseUrl + 'auth/sign_out', {
                    headers: {
                        'access-token': $http.defaults.headers['access-token'],
                        client: $http.defaults.headers.client,
                        uid: $http.defaults.headers.uid
                    }
                }).success(function(success) {
                    console.log(success);
                    $cookies.remove('access_token');
                    $cookies.remove('expiry');
                    $cookies.remove('uid');
                    $cookies.remove('token-type');
                    $cookies.remove('client');
                    $cookies.remove('user');
                    delete $http.defaults.headers['access-token'];
                    delete $http.defaults.headers.uid;
                    delete $http.defaults.headers.client;
                    $location.path('/login');
                })
                .error(function(error) {
                    console.log(error);
                });
        }
        api.productsById = $resource(api.baseUrl + 'products/:id', {id:'@id'}, {'put': {method:'PUT'},'get':{method: 'GET'}});
        api.allProducts = $resource(api.baseUrl + 'products/',{}, {'get': {method:'GET', isArray: true}});
        api.addProduct = $resource(api.baseUrl + 'products/',{}, {'save': {method:'POST'}});
        //     'get': { method: 'GET' },
        //     'save': { method: 'POST' },
        //     'query': { method: 'GET', isArray: true },
        //     'remove': { method: 'DELETE' },
        //     'delete': { method: 'DELETE' }
        


        return api;
    }

})();