var config = require('./../config'),
    http = require('http'),
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

    var options = {
        host: 'www.random.org',
        path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
    };

    call = function(response) {
        var str = '';

        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            console.log(str);
        });
    }

    http.request('http://www.google.co.uk', call).end();
}