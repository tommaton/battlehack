'use strict';

window.APP.controller('offerSuccessCtrl', ['notification', 'Twillio', '$location', 'globalServices', '$scope', function (notification, Twillio, $location, globalServices, $scope) {
    function init() {
        $scope.returnedUser = $scope.$parent.urlParam(window.location.hash.substr(1).split('&'));
        $scope.getProduct($scope.returnedUser['/offerSuccess?productid'])
    }

    $scope.sendText = function(number) {
        $scope.$emit('LOADING');
        
        Twillio.sendTxt($scope.$parent.user.mobile, 'Neighbour.ly: ' +  $scope.returnedUser['username'] + ' has requested the use of your , visit http://localhost:8080/lender-response/' + $scope.returnedUser['/offerSuccess?productid']).then(function(response) {
            $scope.$emit('NOTLOADING');
            $scope.response = response;
            notification.success('Transaction Complete', 'Thank you for more supporting your Neighbourhood');
            $location.path('home');
        });
    };

     $scope.getProduct = function(productId) {
        globalServices.getProduct(productId).then(function(response) {
            $scope.product = response;
            $scope.sendText($scope.product.user.mobile);
        });
    };

    init();
}]);
