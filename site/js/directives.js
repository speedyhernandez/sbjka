/*globals angular*/
(function () {
    'use strict';
    var app = angular.module('sbjkaApp.directives', [])

        .directive('navContent', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/nav.html',
                controller: 'NavController',
                controllerAs: 'navCtrl'
            };
        })

        .directive('headerContent', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/header.html'
            };
        })

        .directive('footerContent', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/footer.html'
            };
        })

        .directive('modal', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/modal.html',
                controller: 'ModalController',
                controllerAs: 'modalCtrl'
            };
        });
}());