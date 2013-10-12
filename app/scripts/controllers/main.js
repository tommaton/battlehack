'use strict';

window.APP.controller('MainCtrl', ['$scope', 'globalServices', '$location', function ($scope, globalServices, $location) {
    function init() {
        console.log('main ctrller called', 'route is: /');
        if($scope.$parent.isUserLoggedIn()){
            $location.path('home');
        } else {
            console.log('redirect user to login');
            $location.path('login');
        }

    }

    init();
}]);
