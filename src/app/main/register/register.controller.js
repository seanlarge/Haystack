(function() {
    'use strict';

    angular
        .module('app.register')
        .controller('RegisterController', RegisterController);

    /** @ngInject */
    function RegisterController(api, $scope, $state, $location, $rootScope, auth) {
        var vm = this;
        // Data

        // Methods
        vm.createUser = function() {
            auth.register({ email: vm.form.email, password: vm.form.password, password_confirmation: vm.form.password })
        }
    }

})();