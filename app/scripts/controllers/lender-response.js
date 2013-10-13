'use strict';

window.APP.controller('LenderResponseCtrl', ['$scope', '$routeParams', '$location', 'globalServices', 'Twillio',  function ($scope, $routeParams, $location, globalServices, Twillio) {
   
    function init() {
        
        if(!$scope.$parent.user.isLoggedIn){
            $location.path('login');
        } else {
            
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

    $scope.sendTxt = function(action) {
        $scope.$emit('LOADING');
        if(action === 'accept') {
            Twillio.sendTxt('447932718098', 'Neighbour.ly: The User, ' + $scope.product.user.name + ' has accepted the lending of their ' + $scope.product.title + '.').then(function(response) {
                $scope.$emit('NOTLOADING');
                $scope.response = response;

            });
        } else {
            Twillio.sendTxt('447932718098', 'Neighbour.ly: The User, ' + $scope.product.user.name + ' has rejected the lending of their  ' + $scope.product.title + '. Visit: http://localhost:8000/#/home').then(function(response) {
                $scope.$emit('NOTLOADING');
                $scope.response = response;

            });
        }
        
    }

    init();

}]);
