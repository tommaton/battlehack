'use strict';

angular.module('battlehackApp')
  .directive('notification', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the notification directive');
      }
    };
  });
