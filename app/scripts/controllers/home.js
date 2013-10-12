'use strict';

window.APP.controller('HomeCtrl', ['$location', '$scope', 'globalServices', function ($location, $scope, globalServices) {
    function init() {
        $scope.products = null;
        $scope.getProducts();
    }
    
    $scope.getProducts = function() {
        globalServices.getProducts().then(function(response) {
            $scope.products = response;
        });
    };

    init();
}]);
