'use strict';

window.APP.controller('LoginCtrl', ['$scope', '$location', function ($scope, $location) {
    function init() {
        $scope.user = angular.copy($scope.$parent.user);

        $scope.user.email = "";
        $scope.user.password = "";

    }

    $scope.login = function(email, password) {
        $scope.user.email = email;
        $scope.user.password = password;
        $scope.user.isLoggedIn = true;

        $scope.updateUser($scope.user);
    };

    $scope.updateUser = function(user) {
        console.log('updating user with: ', user);
        $scope.$parent.user = user;
        
        localStorage.setItem("user", JSON.stringify($scope.$parent.user));
        console.log('updated user is: ', $scope.$parent.user);
        $location.path('home');
    }

    init();
}]);
