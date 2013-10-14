'use strict';

window.APP.service('Paypal', ['$http', '$q', function Paypal($http, $q) {
    // AngularJS will instantiate a singleton by calling 'new' on this function

    this.makePayment = function(price, description, productId, userName) {
        console.log(encodeURI(userName));
        var data = {'price' : price, 'description': description, 'productid': productId, 'username': encodeURI(userName)};

        var deferred = $q.defer();

        $http.post('http://localhost:3000/paypal', data)
            .success(function(data) {
                console.log(data);
                return deferred.resolve(data);
            })
            .error(function(data) {
                console.log('error', data);
                return deferred.reject(data);
            });
        
        return deferred.promise;
    };
}]);