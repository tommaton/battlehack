'use strict';

angular.module('battlehackApp')
  .controller('offerSuccessCtrl', ['notification', '$location', function (notification, $location) {
    function init() {
        notification.success('Transaction Complete', 'Thank you for more supporting you Neighbourhood');
        $location.path('home');
    }

    init();
  }]);
