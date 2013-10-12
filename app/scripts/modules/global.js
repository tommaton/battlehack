var neighbourly = neighbourly || {};
neighbourly.core = neighbourly.core || {};

neighbourly.core.global = (function() {
    'use strict';

    var init = function() {
        if(!localStorage.getItem(currentLocation)) {
            getLocation();
        }
    },
    getLocation = function() {        
        navigator.geolocation.getCurrentPosition(function(position) {
            storeLocation(position.coords.latitude, position.coords.longitude);
        }); 
    },
    storeLocation = function(latitude, longitude) {
        localStorage.setItem('currentLocation', {latitude, longitude});
    };

    init();

})();