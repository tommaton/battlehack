'use strict';

window.APP = angular.module('battlehackApp', []);

window.APP.controller('AppCtrl', ['$scope', '$location', function($scope, $location) {
    function init() {
      var loggedInState = (localStorage.getItem('user') || false),
          loggedinUserDetails = JSON.parse(localStorage.getItem('user')),
          heartEl = angular.element('.glyphicon-heart');


        if(loggedInState) {
          loggedInState = loggedinUserDetails.isLoggedIn;

          $scope.user = {
              isLoggedIn: loggedInState,
              mobile: loggedinUserDetails.mobile,
              name: loggedinUserDetails.name
          };
        }

      $scope.isSearchVisible = false;

      $scope.$watch('isHeartActive', function(value) {
        if(value){
          heartEl.addClass('active');
        } else {
          heartEl.removeClass('active');
        }
      });

      $scope.isLoading = false;

      $scope.isTopNavVisible = false;

      $scope.$on('LOADING',function(){
          $scope.isLoading = true;
      });

      $scope.$on('NOTLOADING',function(){
          $scope.isLoading = false;
      });

    }

    $scope.toggleState = function() {
      $scope.isHeartActive = !$scope.isHeartActive;
    };

    $scope.isHome = function() {
      return (location.hash === '#/home');
    };

    $scope.isProduct = function() {
      return (location.hash.split('/')[1] === 'product');
    };

    $scope.showLogo = function() {
      return (location.hash === '#/home' || location.hash === '#/login');
    };

    $scope.toggleSearchVisibility = function() {
      console.log($scope.isSearchFieldVisible);
      $scope.isSearchFieldVisible = !$scope.isSearchFieldVisible;
    };


    $scope.logOut = function() {
      $scope.user = {
        isLoggedIn: false,
        email: null,
        password: null
      };
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
    .when('/directions/:id', {
      templateUrl: 'views/directions.html',
      controller: 'DirectionsCtrl'
    })
    .when('/lender-response/:productId', {
      templateUrl: 'views/lender-response.html',
      controller: 'LenderResponseCtrl'
    })
    .when('/offerSuccess', {
      templateUrl: 'views/offerSuccess.html',
      controller: 'offerSuccessCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
