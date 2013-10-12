'use strict';

angular.module('battlehackApp')
  .controller('ContactuserCtrl', ['$scope', '$routeParams', '$location', 'globalServices', 'Twillio',  function ($scope, $routeParams, $location, globalServices, Twillio) {
    function init() {
        
        if(!$scope.$parent.user.isLoggedIn){
            $location.path('login');
        } else {
            console.log($routeParams);
            $scope.neighbour = $routeParams.userId;
            $scope.productId = $routeParams.productId;

            $scope.getProduct($scope.productId);
        }
    }

    $scope.getProduct = function(productId) {
        $scope.$emit('LOADING');
        globalServices.getProduct(productId).then(function(response) {
            $scope.$emit('NOTLOADING');
            $scope.product = response;
        });
    };

    $scope.sendTxt = function() {
        $scope.$emit('LOADING');
        Twillio.sendTxt('441325952405', 'Testing Text Message Service').then(function(response) {
            $scope.$emit('NOTLOADING');
            $scope.response = response;
            console.log(response);
        });
    }

    init();
  }]);
