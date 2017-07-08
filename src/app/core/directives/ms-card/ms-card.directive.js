(function ()
{
    'use strict';

    angular
        .module('app.core')
        .directive('msCard', msCardDirective);

    /** @ngInject */
    function msCardDirective($state)
    {
        return {
            restrict: 'E',
            scope   : {
                templatePath: '=template',
                card        : '=ngModel',
                vm          : '=viewModel'
            },
            template: '<div class="ms-card-content-wrapper" ng-include="templatePath" onload="cardTemplateLoaded()"></div>',
            compile : function (tElement)
            {
                // Add class
                tElement.addClass('ms-card');

                return function postLink(scope, iElement)
                {
                    // Methods
                    scope.cardTemplateLoaded = cardTemplateLoaded;
                    scope.gotoProductDetail = gotoProductDetail;
                    scope.trim = trim;
                    scope.switchImage = switchImage;
                    //////////

                    /**
                     * Emit cardTemplateLoaded event
                     */
                    function gotoProductDetail(id)
                    {
                        $state.go('app.e-commerce.products.detail', {id: id});
                    }
                    function cardTemplateLoaded()
                    {
                        scope.$emit('msCard::cardTemplateLoaded', iElement);
                    }
                    function trim(str){
                        return str.slice(0, 320) + ' ...Click details for more';
                    }
                    function switchImage(card) {
                        if(!card.image){
                            return 'https://s3.amazonaws.com/haystack-image/food-healthy-vegetables-potatoes.jpg';
                        }
                        return card.image;
                    }
                };
            }
        };
    }
})();