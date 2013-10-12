'use strict';

window.APP.controller('HomeCtrl', ['$location', '$scope', 'globalServices', function ($location, $scope, globalServices) {
    function init() {
        if(!$scope.$parent.user.isLoggedIn){
            $location.path('login');
        } else {
            $scope.products = null;
            $scope.getProducts();
        }
    }
    
    $scope.getProducts = function() {
        $scope.$emit('LOADING');
        globalServices.getProducts().then(function(response) {
            $scope.$emit('NOTLOADING');
            $scope.products = response;
        });
    };

    init();
}]);
