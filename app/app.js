'use strict';

// Declare app level module which depends on views, and components
const myApp = angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).
config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
    //$locationProvider.hashPrefix('!');
    $routeProvider
    .when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    })
    .when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
    })
    .otherwise({redirectTo: '/view1'});
}]);
