'use strict';

window.APP.controller('ConfirmationfailCtrl', function ($scope) {
    function init() {
        if(!$scope.$parent.user.isLoggedIn){
            $location.path('login');
        } else {

        }
    }

    init();
});
