var config = require('./../config'),
    request = require('requestify'),
    Step = require('step'),
    _ = require('underscore.string');

exports.getDonation = function (donationId, callback) {
    var url = _.sprintf(config.justgiving.getDonation, config.justgiving.apiKey, donationId);
    var headers = {"headers":{"Content-type": "application/json"}};


}

exports.getLocalCharities = function (area, callback) {
    var url = _.sprintf(config.justgiving.searchCharities, config.justgiving.apiKey, area);
    console.log(url);
    var headers = {"headers":{"Content-type": "application/json"}};

    request.

    request.get(url, headers, function(data){
        callback(data);
    })
}