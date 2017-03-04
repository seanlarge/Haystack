(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(api, $location, $rootScope, $cookies, $http, auth) {
        var vm = this;

        // Data

        // Methods
        vm.logIn = function() {
            auth.logIn({email: vm.form.email, password: vm.form.password});
                // api.establishSession.save({ email: vm.form.email, password: vm.form.password },
                //     function(success, headersFun) {
                //         var headers = headersFun();
                //         var user = success.data;
                //         $cookies.put('access_token', headers['access-token']);
                //         $http.defaults.headers['access-token'] = headers['access-token'];
                //         $cookies.put('expiry', headers['expiry']);
                //         $cookies.put('uid', headers['uid']);
                //         $http.defaults.headers.uid = headers.uid;
                //         $cookies.put('token-type', headers['token-type']);
                //         $cookies.put('client', headers['client']);
                //         $http.defaults.headers.client = headers.client;
                //         $cookies.put('user', user['email']);
                //         $location.path('/e-commerce/products');
                //     },
                //     function(error) {
                //         console.log(error);
                //     });

            }
            //////////
    }
})();