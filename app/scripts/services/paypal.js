'use strict';

window.APP.service('Paypal', ['$http', '$q', function Paypal($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.makePayment = function(price, description) {
        var deferred = $q.defer();
        console.log(arguments);
        $http.post('http://localhost:3000/paypal', {'price' : price, 'description': description})
            .success(function(data) {
                return deferred.resolve(data);
            })
            .error(function(data) {
                return deferred.reject(data);
            });
        
        return deferred.promise;
    };
}]);