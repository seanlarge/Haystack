(function () {
    'use strict';

    angular
        .module('app.toolbar')
        .controller('ToolbarController', ToolbarController);

    angular
        .module('app.toolbar')
        .controller('dialogController', dialogController);

    /** @ngInject */
    function dialogController(api, $log, $state, $location, $mdDialog) {
        var vm = this;
        vm.product = {};
        vm.send = send;
        function send() {
    
            api.addProduct.save({product: vm.product},
                function (success) {
                    $location.url('e-commerce/products/' + success.id);
                    $mdDialog.hide();
                },
                function (error) {
                    $log.error(error);
                });
        }
    }

    /** @ngInject */
    function ToolbarController($rootScope, $q, $state, $timeout, $mdDialog, $mdSidenav, $translate, $mdToast, msNavigationService, auth, $cookies, api) {
        var vm = this;
        vm.userEmail = $cookies.get('user');

        // Data
        $rootScope.global = {
            search: ''
        };

        vm.bodyEl = angular.element('body');
        vm.userStatusOptions = [{
            'title': 'Online',
            'icon': 'icon-checkbox-marked-circle',
            'color': '#4CAF50'
        },
        {
            'title': 'Away',
            'icon': 'icon-clock',
            'color': '#FFC107'
        },
        {
            'title': 'Do not Disturb',
            'icon': 'icon-minus-circle',
            'color': '#F44336'
        },
        {
            'title': 'Invisible',
            'icon': 'icon-checkbox-blank-circle-outline',
            'color': '#BDBDBD'
        },
        {
            'title': 'Offline',
            'icon': 'icon-checkbox-blank-circle-outline',
            'color': '#616161'
        }
        ];


        // Methods
        vm.toggleSidenav = toggleSidenav;
        vm.logout = logout;
        vm.setUserStatus = setUserStatus;
        vm.toggleHorizontalMobileMenu = toggleHorizontalMobileMenu;
        vm.toggleMsNavigationFolded = toggleMsNavigationFolded;
        vm.search = search;
        vm.searchResultClick = searchResultClick;
        vm.addProduct = addProduct;

        //////////

        init();

        /**
         * Initialize
         */
        function init() {
            // Select the first status as a default
            vm.userStatus = vm.userStatusOptions[0];
        }

        /**
         * open add product modal
         */
        function addProduct() {
            $mdDialog.show({
                controller: dialogController,
                controllerAs: 'vm',
                templateUrl: 'app/core/directives/modals/add-product-modal.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true
            }).then(function (answer) {
               
            }, function () {
                
            });
        }

        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId) {
            $mdSidenav(sidenavId).toggle();
        }

        /**
         * Sets User Status
         * @param status
         */
        function setUserStatus(status) {
            vm.userStatus = status;
        }

        /**
         * Logout Function
         */
        function logout() {
            auth.logOut();
        }


        /**
         * Toggle horizontal mobile menu
         */
        function toggleHorizontalMobileMenu() {
            vm.bodyEl.toggleClass('ms-navigation-horizontal-mobile-menu-active');
        }

        /**
         * Toggle msNavigation folded
         */
        function toggleMsNavigationFolded() {
            msNavigationService.toggleFolded();
        }

        /**
         * Search action
         *
         * @param query
         * @returns {Promise}
         */
        function search(query) {
            var navigation = [],
                flatNavigation = msNavigationService.getFlatNavigation(),
                deferred = $q.defer();

            // Iterate through the navigation array and
            // make sure it doesn't have any groups or
            // none ui-sref items
            for (var x = 0; x < flatNavigation.length; x++) {
                if (flatNavigation[x].uisref) {
                    navigation.push(flatNavigation[x]);
                }
            }

            // If there is a query, filter the navigation;
            // otherwise we will return the entire navigation
            // list. Not exactly a good thing to do but it's
            // for demo purposes.
            if (query) {
                navigation = navigation.filter(function (item) {
                    if (angular.lowercase(item.title).search(angular.lowercase(query)) > -1) {
                        return true;
                    }
                });
            }

            // Fake service delay
            $timeout(function () {
                deferred.resolve(navigation);
            }, 1000);

            return deferred.promise;
        }

        /**
         * Search result click action
         *
         * @param item
         */
        function searchResultClick(item) {
            // If item has a link
            if (item.uisref) {
                // If there are state params,
                // use them...
                if (item.stateParams) {
                    $state.go(item.state, item.stateParams);
                } else {
                    $state.go(item.state);
                }
            }
        }


    }

})();