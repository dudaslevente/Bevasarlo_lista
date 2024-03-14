var app = angular.module('listApp', ['ngRoute', 'ngNotify']);

app.run(function($rootScope, $location){
    $rootScope.appTitle = 'Bevásárlólista';
    $rootScope.author = '12.A szoftverfejlesztő';
    $rootScope.company = 'Bajai SZC Türr István Technikum';
    $rootScope.serverUrl = 'http://localhost:5000';

});

app.config(function($routeProvider){
    $routeProvider
    .when('/lista', {
        templateUrl: 'Views/main.html',
        controller: 'listCtrl'
    })
    .otherwise({
        redirectTo: '/lista'
    })
});