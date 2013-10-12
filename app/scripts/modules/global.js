var neighbourly = neighbourly || {};
neighbourly.core = neighbourly.core || {};

neighbourly.core.global = {
    init: function() {
        if(!localStorage.getItem("currentLocation")) {
            neighbourly.core.global.getLocation();
        }
    },
    getLocation: function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            neighbourly.core.global.storeLocation(position.coords.latitude, position.coords.longitude);
        });
    },
    storeLocation: function(latitude, longitude) {
        var latLong = JSON.stringify({
            "latitude": latitude,
            "longitude": longitude
        });
        localStorage.setItem('currentLocation', latLong);
    }
};

//neighbourly.core.global.init();
