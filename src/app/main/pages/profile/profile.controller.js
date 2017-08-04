(function ()
{
    'use strict';

    angular
        .module('app.pages.profile')
        .controller('ProfileController', ProfileController);

    /** @ngInject */
    function ProfileController($state, $log, $rootScope, api, Timeline, About, PhotosVideos, Dashboard, Products)
    {
        var vm = this;
        // Data
        if($rootScope.newUser){
            api.createClient.save({user_id: $rootScope.user.uid},
            function(success) {
            console.log(success);
            },
            function(error){

            })
        }
        vm.dashboard = Dashboard;
        vm.widget1 = vm.dashboard.widget1;
        vm.widget2 = vm.dashboard.widget2;
        vm.widget3 = vm.dashboard.widget3;
        vm.widget4 = vm.dashboard.widget4;
        vm.posts = Timeline.posts;
        vm.activities = Timeline.activities;
        vm.about = About.data;
        vm.photosVideos = PhotosVideos.data;
        vm.products = Products.data;
        
        vm.dtInstance = {};

        // Methods

        //////////
        vm.products= [{
            "title": "Food",
            "subtitle": "food made locally is the best",
            "text": "Jam made in the heart of DC.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        },
        {
            "title": "Food",
            "subtitle": "food made locally is the best",
            "text": "Jam made in the heart of DC.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        },
        {
            "title": "Food",
            "subtitle": "food made locally is the best",
            "text": "Jam made in the heart of DC.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        },
        {
            "title": "Food",
            "subtitle": "food made locally is the best",
            "text": "Jam made in the heart of DC.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        },
        {
            "title": "Food",
            "subtitle": "food made locally is the best",
            "text": "Jam made in the heart of DC.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        },
        {
            "title": "Food",
            "subtitle": "food made locally is the best",
            "text": "Jam made in the heart of DC.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        },
        {
            "title": "Food",
            "subtitle": "food made locally is the best",
            "text": "Jam made in the heart of DC.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        },
        {
            "title": "Food",
            "subtitle": "food made locally is the best",
            "text": "Jam made in the heart of DC.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        },
        {
            "title": "Food",
            "subtitle": "food made locally is the best",
            "text": "Jam made in the heart of DC.",
            "media": {
                "image": {
                    "src": "assets/images/stock/food-healthy-vegetables-potatoes.jpg",
                    "alt": "Early Sunrise"
                }
            }
        }];
    }

})();
