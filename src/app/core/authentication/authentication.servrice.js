(function() {
    'use strict';
    angular
        .module('fuse')
        .factory('auth', authenticationService);

    /**@ngInject */
    function authenticationService($cookies, $http, $location, $log, $resource, $rootScope, api) {
        var auth = {};
        auth.register = function(newUser) {
            api.createUser.save(newUser,
                function(success) {
                    api.establishSession.save(newUser,
                        function(success, headersFun) {
                            var head = headersFun();
                            console.log(head);
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
                            $rootScope.user = head;
                            $rootScope.newUser = true;
                            $location.path('/profile');
                        },
                        function(error) {
                            $log.error(error);
                        })
                },
                function(error) {
                    $log.error(error);
                    alert(error.data.errors.full_messages[0]);
                });
        }
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
                    $location.path('/profile');
                },
                function(error) {
                    console.log(error);
                    // TODO MORE USER FRIENDLY ERROR
                    alert(error.data.errors[0]);
                   
                });


        }

        auth.logOut = function() {
            api.logout();
        }

        return auth;
    }

})();