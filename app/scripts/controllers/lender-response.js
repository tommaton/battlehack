'use strict';

window.APP.controller('LenderResponseCtrl', ['$scope', '$routeParams', 'notification', '$location', 'globalServices', 'Twillio',  function ($scope, $routeParams, notification, $location, globalServices, Twillio) {
   
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
        var userDetails = $scope.$parent;

        $scope.$emit('LOADING');
        if(action === 'accept') {
            Twillio.sendTxt("447779232043", 'Neighbour.ly: The User, ' + $scope.product.user.name + ' has accepted the lending of their ' + $scope.product.title + '.').then(function(response) {
                $scope.$emit('NOTLOADING');
                $scope.response = response;
                notification.success('Your lending response', 'Your Neighbour will receieve your acceptance text shortly.');
            });
        } else {
            Twillio.sendTxt(userDetails.mobile, 'Neighbour.ly: The User, ' + $scope.product.user.name + ' has rejected the lending of their  ' + $scope.product.title + '.').then(function(response) {
                $scope.$emit('NOTLOADING');
                $scope.response = response;
                notification.success('Your lending response', 'Your Neighbour will receieve your rejection text shortly.');
            });
        }
        
    }

    init();

}]);
