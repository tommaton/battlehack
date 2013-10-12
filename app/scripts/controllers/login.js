'use strict';

window.APP.controller('LoginCtrl', ['$scope', '$location', function ($scope, $location) {
    function init() {
        $scope.user = angular.copy($scope.$parent.user);

        $scope.user.email = "";
        $scope.user.password = "";

        console.log($scope.user);

    }



    $scope.login = function(email, password) {
        $scope.user.email = email;
        $scope.user.password = password;

        $scope.updateUser($scope.user);
    };

    $scope.updateUser = function(user) {
        $scope.$parent.user = user;
        console.log($scope.$parent.user);
        $location.path('home');
    }

    init();
}]);
