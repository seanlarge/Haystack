(function() {

    'use strict';

    angular
        .module('app.products', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider) {
        // State
        $stateProvider.state('app.products', {
            url: '/products',
            views: {
                'main@': {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller: 'MainController as vm'
                },
                'content@app.products': {
                    templateUrl: 'app/main/products/products.html',
                    controller: 'productsController as vm'
                }
            },
            bodyClass: 'products'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/products');

    }
})();