var twilioApi = require('twilio'),
    config = require('./../config')

exports.sendMessage = function (toNumber, message, callback) {
    var client = new twilioApi.RestClient(config.twilio.sid, config.twilio.authToken);

    client.sms.messages.create({
                to:toNumber,
                from:config.twilio.fromNumber,
                body:message
            }, function(error, message) {
                if (!error) {
                    console.log('Success! The SID for this SMS message is:');
                    console.log(message.sid);

                    console.log('Message sent on:');
                    console.log(message);

                    callback('{"status":"Sent","sent":"true","date":' + message.dateCreated + '}');
                }
                else {
                    callback('{"status":"failed","error":error.message}');
                }
            });
}