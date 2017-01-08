(function() {
    'use strict';

    angular
        .module('app.register')
        .controller('RegisterController', RegisterController);

    /** @ngInject */
    function RegisterController(api) {
        var vm = this;
        // Data

        // Methods
        vm.createUser = function() {

            api.createUser(vm.form.email, vm.form.password).then(function(data) {
                console.log('DATA ---', data);
            });

        }
    }

})();