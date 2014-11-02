/*globals angular, $*/
(function () {
    'use strict';
    var app = angular.module('sbjkaApp', [
        'ngRoute',
        'sbjkaApp.controllers',
        'sbjkaApp.directives'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html'
            })
            .when('/shotokan', {
                templateUrl: 'partials/shotokan.html'
            })
            .when('/instructors', {
                templateUrl: 'partials/instructors.html'
            })
            .when('/schedule', {
                templateUrl: 'partials/schedule.html'
            })
            .when('/kata', {
                templateUrl: 'partials/kata.html',
                controller: 'KataController as kataCtrl'
            })
            .when('/contact', {
                templateUrl: 'partials/contact.html'
            })
            .otherwise({
                templateUrl: 'partials/404.html'
            });
    }]);
}());