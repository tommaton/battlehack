var config = {}
config.paypal = {}
config.twilio = {}
config.justgiving = {}
config.maps = {}

config.paypal.clientId = 'AdeqvhCTW_h3FI3Zv96BQUNvWnaJfuicpddS5WyqSLYrZElghhiwQRXsGFYt';
config.paypal.clientSecret =  'ECuYzxCLb7vhh0ozh3xHtm-iy_XMKP8iSvjky5fe1vhNl1tExelpm7QxeyiU';
config.paypal.returnUrl = 'http://localhost:8080/#/offerSuccess';
//config.paypal.returnUrl = 'http://localhost:3000/paypal/complete';
config.paypal.cancelUrl = 'http://localhost:8080/#/paymentcancel';

config.twilio.sid = 'AC3c3b4bbff8b2371a5ca86250ae981f4f';
config.twilio.authToken = '9f87261dc3292ba8895af6c1a35d9abe';
config.twilio.fromNumber = '441325952405';

config.justgiving.apiKey = '84e9d29a';
config.justgiving.getDonation = 'https:\/\/api.justgiving.com\/%s\/v1\/donation\/%s';
config.justgiving.searchCharities = 'https:\/\/api.justgiving.com\/%s/v1/charity/search?q=%s&pageSize=3';

module.exports = config;

// env = require('env.json');

//exports.config = function() {
//    var node_env = process.env.NODE_ENV || 'development';
//    return env[node_env];
//};