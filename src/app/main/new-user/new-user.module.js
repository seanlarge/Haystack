(function() {
    'use strict';

    angular
        .module('app.new-user', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider) {
        // State
        $stateProvider.state('app.new-user', {
            url: '/register/new-user',
            views: {
                'main@': {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller: 'MainController as vm'
                },
                'content@app.new-user': {
                    templateUrl: 'app/main/new-user/new-user.html',
                    controller: 'NewUserController as vm'
                }
            },
            bodyClass: 'register'
        })

        // Translate
        // $translatePartialLoaderProvider.addPart('app/main/register');

        // Navigation
        // msNavigationServiceProvider.saveItem('register', {
        //     title : 'Register',
        //     state : 'app.register',
        //     weight: 4
        // });
    }

})();