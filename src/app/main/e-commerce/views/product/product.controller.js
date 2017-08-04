(function () {
    'use strict';

    angular
        .module('app.e-commerce')
        .controller('ProductController', ProductController);

    /** @ngInject */
    function ProductController($document, $state, $log, api, Product, S3) {
        var vm = this;
        // Data
        vm.taToolbar = [
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote', 'bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent', 'html', 'insertImage', 'insertLink', 'insertVideo', 'wordcount', 'charcount']
        ];
        vm.product = Product;
        vm.categoriesSelectFilter = '';
        vm.ngFlowOptions = {
            // You can configure the ngFlow from here
            /*target                   : 'api/media/image',
             chunkSize                : 15 * 1024 * 1024,
             maxChunkRetries          : 1,
             simultaneousUploads      : 1,
             testChunks               : false,
             progressCallbacksInterval: 1000*/
        };
        vm.ngFlow = {
            // ng-flow will be injected into here through its directive
            flow: {}
        };
        vm.dropping = false;

        // Methods
        vm.gotoProducts = gotoProducts;
        vm.onCategoriesSelectorOpen = onCategoriesSelectorOpen;
        vm.onCategoriesSelectorClose = onCategoriesSelectorClose;
        vm.fileAdded = fileAdded;
        vm.upload = upload;
        vm.fileSuccess = fileSuccess;
        vm.updateProduct = updateProduct;

        //////////



        /**
         * Go to products page
         */
        function gotoProducts() {
            $state.go('app.e-commerce.products');
        }

        /**
         * On categories selector open
         */
        function onCategoriesSelectorOpen() {
            // The md-select directive eats keydown events for some quick select
            // logic. Since we have a search input here, we don't need that logic.
            $document.find('md-select-header input[type="search"]').on('keydown', function (e) {
                e.stopPropagation();
            });
        }

        /**
         * On categories selector close
         */
        function onCategoriesSelectorClose() {
            // Clear the filter
            vm.categoriesSelectFilter = '';

            // Unbind the input event
            $document.find('md-select-header input[type="search"]').unbind('keydown');
        }

        /**
         * File added callback
         * Triggers when files added to the uploader
         *
         * @param file
         */
        function fileAdded(file) {


            // Prepare the temp file data for media list
            var uploadingFile = {
                id: file.uniqueIdentifier,
                file: file,
                type: 'uploading'
            };
            S3.upload(file, vm.product);
            vm.showImageProgres = true;
            // Append it to the media list
            //TODO NEED A PROGRESS BAR OR SPINNER
            var changePicture = setTimeout(function () {
                vm.product.image = 'https://s3.amazonaws.com/haystack-image/' + trim(vm.product.company_name + file.name);
                vm.showImageProgres = false;
            }, 2000);
        }

        /**
         * Upload
         * Automatically triggers when files added to the uploader
         */
        function upload() {
            // Set headers
            vm.ngFlow.flow.opts.headers = {
                'X-Requested-With': 'XMLHttpRequest',
                //'X-XSRF-TOKEN'    : $cookies.get('XSRF-TOKEN')
            };

            vm.ngFlow.flow.upload();
        }

        /**
         * File upload success callback
         * Triggers when single upload completed
         *
         * @param file
         * @param message
         */
        function fileSuccess(file, message) {
            // Iterate through the media list, find the one we
            // are added as a temp and replace its data
            // Normally you would parse the message and extract
            // the uploaded file data from it
            angular.forEach(vm.product.images, function (media, index) {
                if (media.id === file.uniqueIdentifier) {
                    // Normally you would update the media item
                    // from database but we are cheating here!
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(media.file.file);
                    fileReader.onload = function (event) {
                        media.url = event.target.result;
                    };

                    // Update the image type so the overlay can go away
                    media.type = 'image';
                }
            });
        }
        function trim(str) {
            return str.replace(/ /g, '');
        }
        function updateProduct(event) {
            event.stopPropagation();

            var updatedProduct = {};
            updatedProduct.name = vm.product.name;
            updatedProduct.description = vm.product.description;
            updatedProduct.client_id = vm.product.client_id;
            updatedProduct.category = vm.product.category;
            updatedProduct.price_cents = vm.product.price_cents;
            updatedProduct.quantity = vm.product.quantity;
            updatedProduct.active = vm.product.active;
            updatedProduct.subcategory = vm.product.subcategory;
            updatedProduct.distribution = vm.product.distribution;
            updatedProduct.unique_selling_propositions = vm.product.unique_selling_propositions;
            updatedProduct.distribution_limitations = vm.product.distribution_limitations;
            updatedProduct.unique_selling_propositions = vm.product.unique_selling_propositions;
            updatedProduct.distribution_channels = vm.product.distribution_channels;
            updatedProduct.drop_ship_capability = vm.product.drop_ship_capability;
            updatedProduct.approvals_certifications = vm.product.approvals_certifications;
            updatedProduct.private_label_capability = vm.product.private_label_capability;
            updatedProduct.target_audience = vm.product.target_audience;
            updatedProduct.company_name = vm.product.company_name;
            updatedProduct.image = vm.product.image;
            updatedProduct.sku = vm.product.sku;
            updatedProduct.barcode = vm.product.barcode;
            updatedProduct.width = vm.product.width;
            updatedProduct.height = vm.product.height;
            updatedProduct.depth = vm.product.depth;
            updatedProduct.weight = vm.product.weight;
            updatedProduct.extra_shipping_fee = vm.product.extra_shipping_fee;
            updatedProduct.price_tax_excluded = vm.product.price_tax_excluded;
            updatedProduct.price_tax_included  = vm.product.price_tax_included
            updatedProduct.tax_rate = vm.product.tax_rate;
            updatedProduct.compared_price = vm.product.compared_price;
            console.log(updatedProduct.price_tax_excluded)
            api.productsById.put({id: vm.product.id}, {product:updatedProduct},
            function(success){
                $log.info(success);
                alert("Successfully Updated!");
                //TODO $STATE.GO('app.e-commerce.products');
            },
            function(error){
                alert('error');
                console.log('called');
            });
        }

    }
})();