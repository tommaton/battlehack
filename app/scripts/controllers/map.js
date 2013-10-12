'use strict';

window.APP.controller('MapCtrl', ['$location', '$scope', 'globalServices', function ($location, $scope, globalServices) {
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
            $scope.loadMap();
        });
    };

    $scope.loadMap = function() {

        nokia.Settings.set('app_id', 'kmwpUb08UtDm0fNWVk7I');
        nokia.Settings.set('app_code', 'olY6cOnIbswrXEgZ53cGUw');

        var mapContainer = document.getElementById('mapped-products'),
            currentLocation = JSON.parse(sessionStorage.getItem('currentLocation')),
            markers = [],
            TOUCH = nokia.maps.dom.Page.browser.touch,
            EVENT_CLICK = TOUCH ? "tap" : "click",
            infoBubbles = new nokia.maps.map.component.InfoBubbles();

        var map = new nokia.maps.map.Display(mapContainer, {
                components: [
                    // Behavior collection
                    new nokia.maps.map.component.Behavior(),
                    new nokia.maps.map.component.ZoomBar(),
                    new nokia.maps.map.component.Overview(),
                    infoBubbles
                ],
                zoomLevel: 10,
                center: [parseFloat(currentLocation.latitude), parseFloat(currentLocation.longitude)]
            }
        );

        var standardMarker = new nokia.maps.map.StandardMarker([parseFloat(currentLocation.latitude), parseFloat(currentLocation.longitude)]);
            // Next we need to add it to the map's object collection so it will be rendered onto the map.
            map.objects.add(standardMarker);

        var standardMarkerProps = [
            null, // No properties object is specified, so default ones will be used
            {                
                brush: {
                    // fillcolor of brush
                    color: "#F80"
                }
            }
        ]; // Little counter to loop over above properties object

        // loop through and add each marker
        for (var i = $scope.products.length - 1; i >= 0; i--) {
            var product = $scope.products[i],
                userLocation = product.user.location;
            

           var productMarker = new nokia.maps.map.StandardMarker(
                [parseFloat(userLocation.lat), parseFloat(userLocation.long)],
                standardMarkerProps[i]
            );

            productMarker.html = '<div class="product-bubble"><h4>'+product.title+'</h4><p>'+product.description+'</p><p><a href="#/product/'+product.id+'" title="'+product.title+'">Go to item</a></p></div>';

            productMarker.addListener(EVENT_CLICK, function(evt) { 
                infoBubbles.openBubble(evt.target.html, evt.target.coordinate);
            }, false);

            markers.push(productMarker);
        };    

        map.objects.addAll(markers);        
    };

    init();
}]);