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
            auth.logIn({ email: vm.form.email, password: vm.form.password });
        }

    } //// end
})();