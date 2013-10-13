'use strict';

window.APP.directive('notifications', ['notification', function(notification){
        return {
            restrict: 'A',
            scope: {},
            templateUrl: 'views/partials/notifications.html',
            controller: ['$scope', '$element', function NotificationsCtrl($scope, $element){
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
    }])
