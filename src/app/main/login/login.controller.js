(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(api) {
        var vm = this;

        // Data

        // Methods
        api.login.post({email: vm.form.email, password: vm.form.password });
        
        //////////
    }
})();