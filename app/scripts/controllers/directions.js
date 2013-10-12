'use strict';

window.APP.controller('DirectionsCtrl', ['$scope', '$routeParams', 'globalServices', '$location', function ($scope, $routeParams, globalServices, $location) {
    function init() {
        if(!$scope.$parent.user.isLoggedIn){
            $location.path('login');
        } else {
            $scope.productId = $routeParams.id;

            $scope.getProduct($scope.productId);
        }
    }

    $scope.loadMap = function() {

        nokia.Settings.set('app_id', 'kmwpUb08UtDm0fNWVk7I');
        nokia.Settings.set('app_code', 'olY6cOnIbswrXEgZ53cGUw');

        var mapContainer = document.getElementById('mapping-container');

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

        var standardMarker = new nokia.maps.map.StandardMarker([parseFloat($scope.product.user.location.lat), parseFloat($scope.product.user.location.long)]);
        // Next we need to add it to the map's object collection so it will be rendered onto the map.
        map.objects.add(standardMarker);
    };

    $scope.getProduct = function(productId) {
        $scope.$emit('LOADING');
        globalServices.getProduct(productId).then(function(response) {
            $scope.$emit('NOTLOADING');
            $scope.product = response;
            $scope.loadMap();
        });
    };

    init();
  }]);
