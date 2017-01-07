(function ()
{
    'use strict';

    angular
        .module('app.products')
        .controller('ProductsController', ProductsController);

    /** @ngInject */
    function ProductsController(ProductsData)
    {
        var vm = this;

        // Data
        vm.productsText = ProductsData.data.productsText;

        // Methods

        //////////
    }
})();
