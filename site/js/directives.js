/*globals angular*/
(function () {
    'use strict';
    angular.module('sbjkaApp.directives', [])

        .directive('rhNavContent', function () {
            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'templates/nav.html',
                controller: 'NavController',
                controllerAs: 'navCtrl'
            };
        })

        .directive('rhHeaderContent', function () {
            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'templates/header.html'
            };
        })

        .directive('rhFooterContent', function () {
            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'templates/footer.html'
            };
        })

        .directive('rhModal', function () {
            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'templates/modal.html',
                controller: 'ModalController',
                controllerAs: 'modalCtrl'
            };
        });
}());