'use strict';

window.APP.controller('MakeofferCtrl', function ($scope) {
    function init (){
        if(!$scope.$parent.user.isLoggedIn){
            $location.path('login');
        } else {

        }
    }

    init();
  });
