'use strict';

angular.module('battlehackApp')
  .controller('ConfirmdetailsCtrl', function ($scope) {
    function init() {
        if(!$scope.$parent.user.isLoggedIn){
            $location.path('login');
        } else {

        }
    }

    init();
  });
