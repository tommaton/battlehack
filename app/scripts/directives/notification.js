'use strict';

window.APP.directive('notifications', ['notification', function(notification){
        return {
            restrict: 'A',
            scope: {},
            templateUrl: 'views/partials/notifications.html',
            controller: ['$scope', function NotificationsCtrl($scope){
                $scope.queue = notification.getQueue();
                $scope.isNotificationVisible = true;

                $scope.$on('notificatation:removed', function() {
                    // Hide the modal 
                    $scope.isNotificationVisible = false;
                });

                $scope.$on('notificatation:added', function() {
                    // Hide the modal 
                    $scope.isNotificationVisible = true;
                });
            }
        ]};
    }]);
