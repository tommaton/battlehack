'use strict';

window.APP.controller('HomeCtrl', ['$location', '$scope', 'globalServices', function ($location, $scope, globalServices) {
    function init() {
        if(!$scope.$parent.user.isLoggedIn){
            $location.path('login');
        } else {
            $scope.products = null;
            $scope.getProducts();
            $scope.$parent.isTopNavVisible = true;
            $scope.searchText = null;
        }
    }
    
    $scope.getProducts = function() {
        $scope.$emit('LOADING');
        globalServices.getProducts().then(function(response) {
            $scope.$emit('NOTLOADING');
            $scope.products = response;
        });
    };

    $scope.getIconClass = function(category) {
        var iconClass = '';

        switch(category) {
            case 'living-room':
                iconClass = 'print'
                break;
            case 'garden':
                iconClass = 'tree-conifer'
                break;          
            case 'kitchen':
                iconClass = 'cutlery'
                break;
            case 'tools':
                iconClass = 'wrench'
                break;
            case 'other':
                iconClass = 'question-sign'
                break;
            case 'bedroom':
                iconClass = 'adjust'
                break;
            default:
                iconClass = 'leaf'
                break;
        }

        return iconClass;
    };

    init();
}]);
