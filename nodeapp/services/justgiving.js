var config = require('config'),
    request = require('request'),
    _ = require('underscore.string');

exports.getDonation = function (donationId, callback) {
    var url = _.sprintf(config.justgiving.getDonation, config.justgiving.apiKey, donationId);
    var headers = {"headers":{"Content-type": "application/json"}};


}

exports.getLocalCharities = function (area, callback) {
    var url = _.sprintf(config.justgiving.searchCharities, config.justgiving.apiKey, area);
    console.log(url);
    var headers = {"headers":{"Content-type": "application/json"}};

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Print the google web page.
            console.log(response);
            callback(body);
        }
        else
        {
            console.log(response);
            console.log(error);
        }
    })


}