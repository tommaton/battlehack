'use strict';

window.APP.controller('HomeCtrl', ['$location', '$scope', function ($location, $scope) {
    function init() {
        if(!$scope.$parent.user.isLoggedIn) {
            //$location.path('login');
        }
    }

    init();
}]);
