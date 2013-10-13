'use strict';

var neighbourly = neighbourly || {};
neighbourly.core = neighbourly.core || {};

neighbourly.core.global = {
    init: function () {
        var windowHeight = $(window).height(),
            $container = $('.container');

        $container.css('height', windowHeight);

        if (!sessionStorage.getItem("currentLocation")) {
            neighbourly.core.global.getLocation();
        }

        neighbourly.core.global.handleNavigation();
    },
    handleNavigation: function () {
        var $navBtn = $('.nav-icon'),
            $navigation = $('.navigation'),
            $navItem = $navigation.find('a');

        $navBtn.on('click', function(e) {
            e.preventDefault();

            $navigation.toggleClass('open');
        });

        $navItem.on('click', function() {
            $navigation.removeClass('open');
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
        sessionStorage.setItem('currentLocation', latLong);
    }
};

neighbourly.core.global.init();