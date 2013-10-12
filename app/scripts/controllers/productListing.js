'use strict';

window.APP.controller('ProductlistingCtrl', ['$scope', 'globalServices', function($scope, globalServices) {
    function init() {
        $scope.products = null;
        $scope.getProducts();
        $scope.pageTitle = 'Product Listings';
    }
    
    $scope.getProducts = function() {
        globalServices.getProducts().then(function(response) {
            $scope.products = response;
        });
    };

    init();
}]);
