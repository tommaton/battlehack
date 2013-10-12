'use strict';

angular.module('battlehackApp')
  .controller('ContactuserCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    function init() {
        var routeParams = $routeParams;

        console.log('contact user ctrl initialised');

        return routeParams;
    }

    init();
  }]);
