'use strict';

window.APP.controller('LoginCtrl', ['$scope', 'notification', '$location', function ($scope, notification, $location) {
    function init() {
        $scope.user = angular.copy($scope.$parent.user);

        $scope.user.email = "";
        $scope.user.password = "";

    }

    $scope.login = function(email, password) {
        $scope.user.email = email;
        $scope.user.password = password;
        $scope.user.isLoggedIn = true;
        notification.success('Login Success!', '');
        $scope.updateUser($scope.user);
    };

    $scope.updateUser = function(user) {
        $scope.$parent.user = user;

        localStorage.setItem("user", JSON.stringify($scope.$parent.user));
        $location.path('home');
    }

    init();
}]);
