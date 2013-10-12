'use strict';

var neighbourly = neighbourly || {};
neighbourly.core = neighbourly.core || {};

neighbourly.core.global = {
    init: function () {
        if (!localStorage.getItem("currentLocation")) {
            neighbourly.core.global.getLocation();
        }
        neighbourly.core.global.handleNavigation();
        neighbourly.core.global.loadMap();
    },
    handleNavigation: function () {
        var $navBtn = $('.nav-icon'),
            $navigation = $('.navigation');

        $navBtn.on('click', function(e) {
            e.preventDefault();

            $navigation.toggleClass('open');
        });
    },
    getLocation: function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            neighbourly.core.global.storeLocation(position.coords.latitude, position.coords.longitude);
        });
    },
    storeLocation: function (latitude, longitude) {
        var latLong = JSON.stringify({
            'latitude': latitude,
            'longitude': longitude
        });
        localStorage.setItem('currentLocation', latLong);
    },
    loadMap: function() {

        nokia.Settings.set('app_id', 'kmwpUb08UtDm0fNWVk7I');
        nokia.Settings.set('app_code', 'olY6cOnIbswrXEgZ53cGUw');

        var mapContainer = document.getElementById('mapping-container');

        var map = new nokia.maps.map.Display(mapContainer, {
                zoomLevel: 16,
                center: [52.51, 13.4]
            }
        );
    }
};

neighbourly.core.global.init();