'use strict';

window.APP.controller('MainCtrl', ['$scope', 'globalServices', '$location', function ($scope, globalServices, $location) {
    function init() {
        if($scope.$parent.isUserLoggedIn()){
            $location.path('home');
        } else {
            $location.path('login');
        }

    }

    init();
}]);
