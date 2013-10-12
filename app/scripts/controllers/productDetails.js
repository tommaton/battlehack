'use strict';

window.APP.controller('ProductdetailsCtrl', ['$scope', '$routeParams', 'globalServices', function ($scope, $routeParams, globalServices) {
    function init() {
        $scope.productId = $routeParams.id;

        $scope.getProduct($scope.productId);
    }

    $scope.getProduct = function(productId) {
        globalServices.getProduct(productId).then(function(response) {
            $scope.product = response;
        });
    } 

    init();
  }]);
