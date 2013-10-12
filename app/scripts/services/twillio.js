'use strict';

window.APP.service('Twillio', ['$http', '$q', function Twillio($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.sendTxt = function(num, msg) {
         var deferred = $q.defer();

        $http.post('http://localhost:3000/twilio', 'tonum=' + num + '&tomessage=' + encodeURI(msg))
            .success(function(data) {
                return deferred.resolve(data);
            })
            .error(function(data) {
                return deferred.reject(data);
            });
        
        return deferred.promise;
    }
}]);
