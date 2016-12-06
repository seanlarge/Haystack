(function ()
{
    'use strict';

    angular
        .module('app.register', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.register', {
            url      : '/register',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.register': {
                    templateUrl: 'app/main/register/register.html',
                    controller : 'RegisterController as vm'
                }
            },
            bodyClass: 'register'
        });

        // Translate
        $translatePartialLoaderProvider.addPart('app/main/register');

        // Navigation
        // msNavigationServiceProvider.saveItem('register', {
        //     title : 'Register',
        //     state : 'app.register',
        //     weight: 4
        // });
    }

})();
