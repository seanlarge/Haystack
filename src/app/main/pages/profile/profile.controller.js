(function ()
{
    'use strict';

    angular
        .module('app.pages.profile')
        .controller('ProfileController', ProfileController);

    /** @ngInject */
    function ProfileController(Timeline, About, PhotosVideos, Dashboard)
    {
        var vm = this;
        vm.dashboard = Dashboard;
        // Data
        vm.widget1 = vm.dashboard.widget1;
        vm.widget2 = vm.dashboard.widget2;
        vm.widget3 = vm.dashboard.widget3;
        vm.widget4 = vm.dashboard.widget4;
        vm.posts = Timeline.posts;
        vm.activities = Timeline.activities;
        vm.about = About.data;
        vm.photosVideos = PhotosVideos.data;

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
