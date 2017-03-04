(function() {
    'use strict';
    angular
        .module('fuse')
        .factory('auth', authenticationService);

    /**@ngInject */
    function authenticationService($resource, $http, $cookies, api, $location) {
        var auth = {};

        auth.logIn = function(data) {
            api.establishSession.save({ email: data.email, password: data.password },
                function(success, headersFun) {
                    var headers = headersFun();
                    var user = success.data;
                    $cookies.put('access_token', headers['access-token']);
                    $http.defaults.headers['access-token'] = headers['access-token'];
                    $cookies.put('expiry', headers['expiry']);
                    $cookies.put('uid', headers['uid']);
                    $http.defaults.headers.uid = headers.uid;
                    $cookies.put('token-type', headers['token-type']);
                    $cookies.put('client', headers['client']);
                    $http.defaults.headers.client = headers.client;
                    $cookies.put('user', user['email']);
                    $location.path('/e-commerce/products');
                },
                function(error) {
                    console.log(error);
                });


        }

        auth.logOut = function() {
            api.logout.delete({},
                function(success) {
                    console.log(success);
                    $cookies.remove('access-token');
                    $cookies.remove('expiry');
                    $cookies.remove('uid');
                    $cookies.remove('token-type');
                    $cookies.remove('client');
                    $cookies.remove('user');
                    delete $http.defaults.headers['access-token'];
                    delete $http.defaults.headers.uid;
                    delete $http.defaults.headers.client;
                    $location.path('/login');
                },
                function(error) {
                    console.log(error);
                });
        }

        return auth;
    }

})();