'use strict';

window.APP.controller('MakeofferCtrl', function ($scope) {
    function init() {
        if(!$scope.$parent.user.isLoggedIn){
            $location.path('login');
        } else {
            $scope.productId = $routeParams.id;

            $scope.getProduct($scope.productId);
        }
    }

    $scope.getProduct = function(productId) {
        $scope.$emit('LOADING');
        globalServices.getProduct(productId).then(function(response) {
            $scope.$emit('NOTLOADING');
            $scope.product = response;
            $scope.loadMap();
        });
    };

    init();
  });
