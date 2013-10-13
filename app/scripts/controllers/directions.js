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


    $scope.loadMapping = function() {

        nokia.Settings.set('app_id', 'kmwpUb08UtDm0fNWVk7I');
        nokia.Settings.set('app_code', 'olY6cOnIbswrXEgZ53cGUw');

        var mapContainer = document.getElementById('mapping-directions-container'),
            userLocation = JSON.parse(sessionStorage.getItem('currentLocation')),
            map = new nokia.maps.map.Display(mapContainer, {
                components: [
                    // Behavior collection
                    new nokia.maps.map.component.Behavior()
                ],
                zoomLevel: 14,
                center: [parseFloat($scope.product.user.location.lat), parseFloat($scope.product.user.location.long)]
            }),
            router = new nokia.maps.routing.Manager();
            

        var onRouteCalculated = function (observedRouter, key, value) {
            if (value == "finished") {
                var routes = observedRouter.getRoutes();
                
                //create the default map representation of a route
                var mapRoute = new nokia.maps.routing.component.RouteResultSet(routes[0]).container;
                map.objects.add(mapRoute);
                
                //Zoom to the bounding box of the route
                map.zoomTo(mapRoute.getBoundingBox(), false, "default");
            } else if (value == "failed") {
                alert("The routing request failed.");
            }
        };

        /* We create on observer on router's "state" property so the above created
         * onRouteCalculated we be called once the route is calculated
         */
        router.addObserver("state", onRouteCalculated);

        // Create waypoints
        var waypoints = new nokia.maps.routing.WaypointParameterList();
        waypoints.addCoordinate(new nokia.maps.geo.Coordinate(parseFloat(userLocation.latitude), parseFloat(userLocation.longitude)));
        waypoints.addCoordinate(new nokia.maps.geo.Coordinate(parseFloat($scope.product.user.location.lat), parseFloat($scope.product.user.location.long)));

        /* Properties such as type, transportModes, options, trafficMode can be
         * specified as second parameter in performing the routing request.
         * 
         * See for the mode options the "nokia.maps.routing.Mode" section in the developer's guide
         */
        var modes = [{
            type: "shortest", 
            transportModes: ["car"],
            options: "avoidTollroad",
            trafficMode: "default"
        }];

        // Trigger route calculation after the map emmits the "displayready" event
        map.addListener("displayready", function () {
            router.calculateRoute(waypoints, modes);
        }, false);
        
    };

    $scope.getProduct = function(productId) {
        $scope.$emit('LOADING');
        globalServices.getProduct(productId).then(function(response) {
            $scope.$emit('NOTLOADING');
            $scope.product = response;
            $scope.loadMapping();
        });
    };

    init();
}]);
