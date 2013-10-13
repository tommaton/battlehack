'use strict';

window.APP.controller('LoginCtrl', ['$scope', 'notification', '$location', function ($scope, notification, $location) {
    function init() {
        $scope.user = angular.copy($scope.$parent.user);
    }

    $scope.login = function(email, password) {
        $scope.user.email = email;
        $scope.user.password = password;
        $scope.user.isLoggedIn = true;
        $scope.user.mobile = 447779232043;
        $scope.user.name = "Francis Gilbert";
        notification.success('Login Success!', 'Welcome Back, ' + $scope.user.name.split(' ')[0]);
        $scope.updateUser($scope.user);
    };

    $scope.updateUser = function(user) {
        $scope.$parent.user = user;

        localStorage.setItem("user", JSON.stringify($scope.$parent.user));
        $location.path('home');
    }

    init();
}]);
