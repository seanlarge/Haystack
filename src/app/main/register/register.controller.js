(function() {
    'use strict';

    angular
        .module('app.register')
        .controller('RegisterController', RegisterController);

    /** @ngInject */
    function RegisterController(api, $scope, $state, $location, $rootScope) {
        var vm = this;
        // Data

        // Methods
        vm.createUser = function() {
            api.createUser.save({ email: vm.form.email, password: vm.form.password, password_confirmation: vm.form.password },
                function(success) {
                    api.establishSession.save({ email: vm.form.email, password: vm.form.password },
                        function(success, headersFun) {
                            $location.path('/e-commerce/products');
                            $rootScope.user = success.data;
                            $rootScope.headers = headersFun();
                        },
                        function(error) {
                            console.log(error);
                        })
                },
                function(error) {
                    console.log(error);
                });
        }
    }

})();