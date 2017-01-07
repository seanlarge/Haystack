(function ()
{
    'use strict';

    angular
        .module('app.products', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.products', {
                url    : '/products',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/products/products.html',
                        controller : 'ProductsController as vm'
                    }
                },
                resolve: {
                    ProductsData: function (msApi)
                    {
                        return msApi.resolve('products@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/products');

        // Api
        msApiProvider.register('products', ['app/data/products/products.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'PRODUCTS',
            group : true,
            state    : 'app.products',
            weight: 1
        });
    }
})();
