'use strict';

window.APP.service('globalServices', ['$http', '$q', function Services($http, $q) {
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

    this.getProduct = function(productId) {
        var deferred = $q.defer();

        $http.get('data/products/product.' + productId + '.json')
            .success(function(data) {
                return deferred.resolve(data);
            })
            .error(function(data) {
                return deferred.reject(data);
            });
        
        return deferred.promise;
    };

}]);
