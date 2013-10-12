'use strict';

window.APP.controller('ContactuserCtrl', ['$scope', '$routeParams', '$location', 'globalServices', 'Twillio',  function ($scope, $routeParams, $location, globalServices, Twillio) {
    function init() {
        
        if(!$scope.$parent.user.isLoggedIn){
            $location.path('login');
        } else {
            
            $scope.neighbour = $routeParams.userId;
            $scope.productId = $routeParams.productId;

            $scope.getProduct($scope.productId);
        }

        $scope.count = "0";

        var commentEl = angular.element('#comment');

        commentEl.on('keyup', function(e) {
            $scope.count = (158 - parseInt(this.value.length));
        })

    }


    $scope.getProduct = function(productId) {
        $scope.$emit('LOADING');
        globalServices.getProduct(productId).then(function(response) {
            $scope.$emit('NOTLOADING');
            $scope.product = response;
        });
    };

    $scope.sendTxt = function() {
        $scope.$emit('LOADING');
        Twillio.sendTxt('447837043238', 'Neighbour.ly: The User, ' + $scope.product.user.name + ' has requested the use of your ' + $scope.product.title + '. Visit: http://localhost:8000/#/home').then(function(response) {
            $scope.$emit('NOTLOADING');
            $scope.response = response;

        });
    }

    init();
  }]);
