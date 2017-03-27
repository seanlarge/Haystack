(function() {
    'use strict';

    angular
        .module('app.new-user')
        .controller('NewUserController', RegisterController);

    /** @ngInject */
    function RegisterController(api, $scope, $state, $location, $rootScope, auth) {
        var vm = this;
        // Data

        // Methods
        console.log('NEW USER');
    }

})();