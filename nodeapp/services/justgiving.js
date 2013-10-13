var sys = require('util'),
    config = require('./../config'),
    rest = require('./restler'),
    _ = require('underscore');

exports.getDonation = function (donationId, callback) {
    var url = _.sprintf(config.justgiving.getDonation, config.justgiving.apiKey, donationId);

    rest.get(url).on('complete', function(data){
        callback(data);
    });
}

exports.getLocalCharities = function (area, callback) {
    var url = _.sprintf(config.justgiving.searchCharities, config.justgiving.apiKey, area);

    rest.get(url).on('complete', function(data){
        callback(data);
    });
}