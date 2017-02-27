(function() {
    'use strict';

    angular
        .module('app.register')
        .controller('RegisterController', RegisterController);

    /** @ngInject */
    function RegisterController(api, $scope, $state, $location) {
        var vm = this;
        // Data

        // Methods
        vm.createUser = function() {
            api.createUser.put({ email: vm.form.email, password: vm.form.password, password_confirmation: vm.form.password },
                function(success) {
                    console.log(success);

                },
                function(error) {
                    console.log(error);
                });

            // api.createUser(vm.form.email, vm.form.password).then(function(data) {
            //     console.log('DATA ---', data);
            //     // if successful log in redirect to products
            //     $state.go('app.products');
            //     //$location.path('/products');
            // });

        }
    }

})();