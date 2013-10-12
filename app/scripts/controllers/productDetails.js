'use strict';

window.APP.controller('ProductdetailsCtrl', ['$scope', '$routeParams', 'globalServices', function ($scope, $routeParams, globalServices) {
    function init() {
        $scope.productId = $routeParams.id;

        $scope.getProduct($scope.productId);

        
    }

    $scope.loadMap = function() {

        nokia.Settings.set('app_id', 'kmwpUb08UtDm0fNWVk7I');
        nokia.Settings.set('app_code', 'olY6cOnIbswrXEgZ53cGUw');

        var mapContainer = document.getElementById('mapping-container');

        console.log(parseFloat($scope.product.user.location.lat));

        var map = new nokia.maps.map.Display(mapContainer, {
                components: [
                    // Behavior collection
                    new nokia.maps.map.component.Behavior(),
                    new nokia.maps.map.component.ZoomBar(),
                    new nokia.maps.map.component.Overview()
                ],
                zoomLevel: 14,
                center: [parseFloat($scope.product.user.location.lat), parseFloat($scope.product.user.location.long)]
            }
        );
    };

    $scope.getProduct = function(productId) {
        globalServices.getProduct(productId).then(function(response) {
            $scope.product = response;
            $scope.loadMap();
        });
    };

    init();
  }]);
