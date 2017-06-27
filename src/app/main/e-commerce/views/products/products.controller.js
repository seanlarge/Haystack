(function ()
{
    'use strict';

    angular
        .module('app.e-commerce')
        .controller('ProductsController', ProductsController);

    /** @ngInject */
    function ProductsController($state, Products)
    {
        var vm = this;

        // Data
        vm.products = Products.data;

        vm.dtInstance = {};
        vm.dtOptions = {
            dom         : 'rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            columnDefs  : [
                {
                    // Target the id column
                    targets: 0,
                    width  : '72px'
                },
                {
                    // Target the image column
                    targets   : 1,
                    filterable: false,
                    sortable  : false,
                    width     : '80px'
                },
                {
                    // Target the quantity column
                    targets: 5,
                    render : function (data, type)
                    {
                        if ( type === 'display' )
                        {
                            if ( parseInt(data) <= 5 )
                            {
                                return '<div class="quantity-indicator md-red-500-bg"></div><div>' + data + '</div>';
                            }
                            else if ( parseInt(data) > 5 && parseInt(data) <= 25 )
                            {
                                return '<div class="quantity-indicator md-amber-500-bg"></div><div>' + data + '</div>';
                            }
                            else
                            {
                                return '<div class="quantity-indicator md-green-600-bg"></div><div>' + data + '</div>';
                            }
                        }

                        return data;
                    }
                },
                {
                    // Target the status column
                    targets   : 6,
                    filterable: false,
                    render    : function (data, type)
                    {
                        if ( type === 'display' )
                        {
                            if ( data === 'true' )
                            {
                                return '<i class="icon-checkbox-marked-circle green-500-fg"></i>';
                            }

                            return '<i class="icon-cancel red-500-fg"></i>';
                        }

                        if ( type === 'filter' )
                        {
                            if ( data )
                            {
                                return '1';
                            }

                            return '0';
                        }

                        return data;
                    }
                },
                {
                    // Target the actions column
                    targets           : 7,
                    responsivePriority: 1,
                    filterable        : false,
                    sortable          : false
                }
            ],
            initComplete: function ()
            {
                var api = this.api(),
                    searchBox = angular.element('body').find('#e-commerce-products-search');

                // Bind an external input as a table wide search box
                if ( searchBox.length > 0 )
                {
                    searchBox.on('keyup', function (event)
                    {
                        api.search(event.target.value).draw();
                    });
                }
            },
            pagingType  : 'simple',
            lengthMenu  : [10, 20, 30, 50, 100],
            pageLength  : 20,
            scrollY     : 'auto',
            responsive  : true
        };

        // Methods
        vm.gotoProductDetail = gotoProductDetail;

        //////////

        /**
         * Go to product detail
         *
         * @param id
         */
        function gotoProductDetail(id)
        {
            $state.go('app.e-commerce.products.detail', {id: id});
        }
         vm.prods= [{
            "id": 1,
            "title": "Food",
            "subtitle": "food made locally is the best",
            "button2": "Details",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum sagittis magna vehicula malesuada. Integer viverra ultricies eros, eget cursus massa placerat et. Quisque pellentesque consequat nulla mollis cursus. Sed posuere ipsum sed sapien laoreet, quis euismod metus pulvinar. Duis ullamcorper, purus non consequat ornare, justo metus faucibus arcu, in tincidunt lectus metus ac lacus. Nulla luctus sem in ex imperdiet, et porta elit feugiat. Morbi venenatis ex lacus, quis fermentum tortor varius non. Donec ut vehicula velit.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        },
        {
            "id": 2,
            "title": "Food",
            "subtitle": "food made locally is the best",
            "button2": "Details",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum sagittis magna vehicula malesuada. Integer viverra ultricies eros, eget cursus massa placerat et. Quisque pellentesque consequat nulla mollis cursus. Sed posuere ipsum sed sapien laoreet, quis euismod metus pulvinar. Duis ullamcorper, purus non consequat ornare, justo metus faucibus arcu, in tincidunt lectus metus ac lacus. Nulla luctus sem in ex imperdiet, et porta elit feugiat. Morbi venenatis ex lacus, quis fermentum tortor varius non. Donec ut vehicula velit.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        },
        {
            "id": 3,
            "title": "Food",
            "subtitle": "food made locally is the best",
            "button2": "Details",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum sagittis magna vehicula malesuada. Integer viverra ultricies eros, eget cursus massa placerat et. Quisque pellentesque consequat nulla mollis cursus. Sed posuere ipsum sed sapien laoreet, quis euismod metus pulvinar. Duis ullamcorper, purus non consequat ornare, justo metus faucibus arcu, in tincidunt lectus metus ac lacus. Nulla luctus sem in ex imperdiet, et porta elit feugiat. Morbi venenatis ex lacus, quis fermentum tortor varius non. Donec ut vehicula velit.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        },
        {
            "id": 4,
            "title": "Food",
            "subtitle": "food made locally is the best",
            "button2": "Details",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum sagittis magna vehicula malesuada. Integer viverra ultricies eros, eget cursus massa placerat et. Quisque pellentesque consequat nulla mollis cursus. Sed posuere ipsum sed sapien laoreet, quis euismod metus pulvinar. Duis ullamcorper, purus non consequat ornare, justo metus faucibus arcu, in tincidunt lectus metus ac lacus. Nulla luctus sem in ex imperdiet, et porta elit feugiat. Morbi venenatis ex lacus, quis fermentum tortor varius non. Donec ut vehicula velit.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        },
        {
            "id": 5,
            "title": "Food",
            "subtitle": "food made locally is the best",
            "button2": "Details",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum sagittis magna vehicula malesuada. Integer viverra ultricies eros, eget cursus massa placerat et. Quisque pellentesque consequat nulla mollis cursus. Sed posuere ipsum sed sapien laoreet, quis euismod metus pulvinar. Duis ullamcorper, purus non consequat ornare, justo metus faucibus arcu, in tincidunt lectus metus ac lacus. Nulla luctus sem in ex imperdiet, et porta elit feugiat. Morbi venenatis ex lacus, quis fermentum tortor varius non. Donec ut vehicula velit.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        },
        {
            "id": 6,
            "title": "Food",
            "subtitle": "food made locally is the best",
            "button2": "Details",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum sagittis magna vehicula malesuada. Integer viverra ultricies eros, eget cursus massa placerat et. Quisque pellentesque consequat nulla mollis cursus. Sed posuere ipsum sed sapien laoreet, quis euismod metus pulvinar. Duis ullamcorper, purus non consequat ornare, justo metus faucibus arcu, in tincidunt lectus metus ac lacus. Nulla luctus sem in ex imperdiet, et porta elit feugiat. Morbi venenatis ex lacus, quis fermentum tortor varius non. Donec ut vehicula velit.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        },
        {
            "id": 7,
            "title": "Food",
            "subtitle": "food made locally is the best",
            "button2": "Details",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum sagittis magna vehicula malesuada. Integer viverra ultricies eros, eget cursus massa placerat et. Quisque pellentesque consequat nulla mollis cursus. Sed posuere ipsum sed sapien laoreet, quis euismod metus pulvinar. Duis ullamcorper, purus non consequat ornare, justo metus faucibus arcu, in tincidunt lectus metus ac lacus. Nulla luctus sem in ex imperdiet, et porta elit feugiat. Morbi venenatis ex lacus, quis fermentum tortor varius non. Donec ut vehicula velit.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        },
        {
            "id": 8,
            "title": "Food",
            "subtitle": "food made locally is the best",
            "button2": "Details",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum sagittis magna vehicula malesuada. Integer viverra ultricies eros, eget cursus massa placerat et. Quisque pellentesque consequat nulla mollis cursus. Sed posuere ipsum sed sapien laoreet, quis euismod metus pulvinar. Duis ullamcorper, purus non consequat ornare, justo metus faucibus arcu, in tincidunt lectus metus ac lacus. Nulla luctus sem in ex imperdiet, et porta elit feugiat. Morbi venenatis ex lacus, quis fermentum tortor varius non. Donec ut vehicula velit.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        },
        {
            "id": 9,
            "title": "Food",
            "subtitle": "food made locally is the best",
            "button2": "Details",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum sagittis magna vehicula malesuada. Integer viverra ultricies eros, eget cursus massa placerat et. Quisque pellentesque consequat nulla mollis cursus. Sed posuere ipsum sed sapien laoreet, quis euismod metus pulvinar. Duis ullamcorper, purus non consequat ornare, justo metus faucibus arcu, in tincidunt lectus metus ac lacus. Nulla luctus sem in ex imperdiet, et porta elit feugiat. Morbi venenatis ex lacus, quis fermentum tortor varius non. Donec ut vehicula velit.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        }];
    }
})();