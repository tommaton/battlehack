'use strict';

window.APP.service('Paypal', ['$http', '$q', function Paypal($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.createPayment = function(price, description) {
        var deferred = $q.defer();

        $http.post('paypal', price, description)
            .success(function(data) {
                return deferred.resolve(data);
            })
            .error(function(data) {
                return deferred.reject(data);
            });
        
        return deferred.promise;
    };

}]);