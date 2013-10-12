'use strict';

angular.module('battlehackApp').controller('ProductlistingCtrl', ['$scope', 'Services', function($scope, Services) {
    console.log($scope, Services);
    $scope.products = null;

    $scope.getProducts = function() {
        Services.getProducts().then(function(response) {
            $scope.products = response;
        },
        function() {
            alert('no products');
        });
    }
}]);
