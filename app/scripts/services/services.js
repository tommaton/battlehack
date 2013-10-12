'use strict';

angular.module('battlehackApp').service('Services', ['$http', function Services($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getProducts = function() {
        var deferred = $q.defer();

            $http.get('data/products.json')
                .success(function(data) {
                    return deferred.resolve(data);
                })
                .error(function(data) {
                    return deferred.reject(data);
                });
            
            return deferred.promise;
    };

}]);
