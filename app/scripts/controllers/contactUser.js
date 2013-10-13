'use strict';

window.APP.controller('ContactuserCtrl', ['$scope', '$routeParams', '$location', 'globalServices', 'Twillio',  function ($scope, $routeParams, $location, globalServices, Twillio) {
   
    function init() {
        
        if(!$scope.$parent.user.isLoggedIn){
            $location.path('login');
        } else {
            
            $scope.neighbour = $routeParams.userId;
            $scope.productId = $routeParams.productId;
            $scope.msg = null;
            $scope.getProduct($scope.productId);
        }

        $scope.count = "0";

        var commentEl = angular.element('#msg');

        commentEl.on('keyup', function(e) {
            $scope.count = (118 - parseInt(this.value.length));
        })
    }

    $scope.getProduct = function(productId) {
        $scope.$emit('LOADING');
        globalServices.getProduct(productId).then(function(response) {
            $scope.$emit('NOTLOADING');
            $scope.product = response;
        });
    };

    $scope.sendTxt = function(number) {
        $scope.$emit('LOADING');
        Twillio.sendTxt('447837043238', 'Neighbour.ly: ' + $scope.product.user.name + ' has a question about your ' + $scope.product.title + '.' + $scope.msg).then(function(response) {
            $scope.$emit('NOTLOADING');
            $scope.response = response;

        });
    }

    init();

}]);
