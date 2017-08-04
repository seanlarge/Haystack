(function ()
{
    'use strict';

    angular
        .module('app.e-commerce')
        .controller('ProductsController', ProductsController);

    /** @ngInject */
    function ProductsController($state, $log, api)
    {
        var vm = this;

        // Data
        vm.products;

       api.allProducts.get({},
       function(success){
        $log.info(success);
        vm.products = success;
       },
       function(error){
        $log.error(error);
       })

        // Methods
        
        //////////

        
    }
})();