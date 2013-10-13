'use strict';

window.APP = angular.module('battlehackApp', []);

window.APP.controller('AppCtrl', ['$scope', '$location', function($scope, $location) {
    function init() {
      var loggedInState = (localStorage.getItem('user') || false);

        if(loggedInState) {
          loggedInState = JSON.parse(localStorage.getItem('user')).isLoggedIn;
        }

        $scope.isSearchVisible = false;

        $scope.user = {
            isLoggedIn: loggedInState
        };

      $scope.isLoading = false;

      $scope.isSearchIconVisible = false;

      $scope.$on('LOADING',function(){
          $scope.isLoading = true;
      });

      $scope.$on('NOTLOADING',function(){
          $scope.isLoading = false;
      });

    }

    $scope.isHome = function() {
      return (location.hash == "#/home");
    }

    $scope.toggleSearchVisibility = function() {
      $scope.isSearchVisible = !$scope.isSearchVisible;
    };


    $scope.logOut = function() {
      $scope.user = {
        isLoggedIn: false,
        email: null,
        password: null
      }
      localStorage.clear('user');
      $location.path('login');

    };

    $scope.isUserLoggedIn = function() {
      
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
    .when('/contactUser/:userId/product/:productId', {
      templateUrl: 'views/contactUser.html',
      controller: 'ContactuserCtrl'
    })
    .when('/map', {
      templateUrl: 'views/map.html',
      controller: 'MapCtrl'
    })
    .when('/respondToOffer', {
      templateUrl: 'views/respondToOffer.html',
      controller: 'RespondtoofferCtrl'
    })
    .when('/makeOffer/:id', {
      templateUrl: 'views/makeOffer.html',
      controller: 'MakeofferCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
