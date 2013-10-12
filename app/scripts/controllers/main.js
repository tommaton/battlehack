'use strict';

window.APP.controller('MainCtrl', ['$scope', 'globalServices', '$location', function ($scope, globalServices, $location) {
    function init() {
        if($scope.$parent.isUserLoggedIn()){
            $location.path('home');
        } else {
            console.log('redirect user to login');
            $location.path('login');
        }

    }

    $scope.isUserLoggedIn = function() {
        if(!$scope.user.isLoggedIn) {
            return false;
        } else {
            return true;
        }
    };

    init();
}]);
