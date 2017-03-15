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
                    var head = headersFun();
                    var user = success.data;
                    $cookies.put('access_token', head['access-token']);
                    $http.defaults.headers['access-token'] = head['access-token'];
                    $cookies.put('expiry', head['expiry']);
                    $cookies.put('uid', head['uid']);
                    $http.defaults.headers.uid = head.uid;
                    $cookies.put('token-type', head['token-type']);
                    $cookies.put('client', head['client']);
                    $http.defaults.headers.client = head.client;
                    $cookies.put('user', user['email']);
                    $location.path('/e-commerce/products');
                },
                function(error) {
                    console.log(error);
                });


        }

        auth.logOut = function() {
            api.logout();
        }

        return auth;
    }

})();