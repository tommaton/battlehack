'use strict';
window.APP = angular.module('battlehackApp', []);
  
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
      .when('/productListing', {
        templateUrl: 'views/productListing.html',
        controller: 'ProductlistingCtrl'
      })
      .when('/productDetails', {
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
      .otherwise({
        redirectTo: '/'
      });
  });
