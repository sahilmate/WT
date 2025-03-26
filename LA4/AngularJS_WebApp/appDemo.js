var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeController'
    })
    .when('/registration', {
        templateUrl: 'registration.html',
        controller: 'RegistrationController'
    })
    .when('/login', {
        templateUrl: 'login.html',
        controller: 'LoginController'
    })
    .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
    $scope.message = 'Welcome to a home page';
});

app.controller('RegistrationController', function($scope) {
    $scope.message = 'Please fill up the Registration form (New User)';
});

app.controller('LoginController', function($scope) {
    $scope.message = 'Please fill up the Login form (Existing User)';
});
