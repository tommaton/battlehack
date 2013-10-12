'use strict';

window.APP = angular.module('battlehackApp', []);

window.APP.controller('AppCtrl', ['$scope', function($scope) {
    function init() {
        $scope.user = {
            isLoggedIn: false
        };

    }

    $scope.logOut = function() {
      console.log('logging out user');
      $scope.user = {
        isLoggedIn: false,
        email: null,
        password: null
      }
    };

    $scope.isUserLoggedIn = function() {
        console.log('is user logged in?', $scope.user.isLoggedIn);
        if(!$scope.user.isLoggedIn) {
            return false;
        } else {
            return true;
        }
    };

    init();
}]);
  
window.APP.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/product/:id', {
      templateUrl: 'views/productDetails.html',
      controller: 'ProductdetailsCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .when('/confirmationSuccess', {
      templateUrl: 'views/confirmationSuccess.html',
      controller: 'ConfirmationsuccessCtrl'
    })
    .when('/confirmationFail', {
      templateUrl: 'views/confirmationFail.html',
      controller: 'ConfirmationfailCtrl'
    })
    .when('/confirmDetails', {
      templateUrl: 'views/confirmDetails.html',
      controller: 'ConfirmdetailsCtrl'
    })
    .when('/contactUser/:userId/product/:productId', {
      templateUrl: 'views/contactUser.html',
      controller: 'ContactuserCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
