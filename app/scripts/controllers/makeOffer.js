'use strict';

window.APP.controller('MakeofferCtrl', ['$scope', '$routeParams', '$location', 'notification', 'globalServices', 'Paypal', function ($scope, $routeParams, $location, notification, globalServices, Paypal) {
    function init() {
        if(!$scope.$parent.user.isLoggedIn){
            $location.path('login');
        } else {
            $scope.productId = $routeParams.id;

            $scope.getProduct($scope.productId);

            $scope.amount = null;
        }
    }

    $scope.getProduct = function(productId) {
        $scope.$emit('LOADING');
        globalServices.getProduct(productId).then(function(response) {
            $scope.$emit('NOTLOADING');
            $scope.product = response;
        });
    };

    $scope.makePayment = function(price, desc) {
        $scope.$emit('LOADING');
        Paypal.makePayment(price, desc).then(function(response) {

            $scope.paypalResponse = response;
            location.href = $scope.paypalResponse.links[1].href;
            notification.success('Redirecting...', 'You are being redirected to Paypal to complete your transaction.');
            $scope.$emit('NOTLOADING');
        });
    };

    init();
  }]);
