var twilioApi = require('twilio'),
    config = require('./../config')

exports.sendMessage = function (toNumber, message, callback) {
    var client = new twilioApi.RestClient(config.twilio.sid, config.twilio.authToken);

    client.sms.messages.create({
                to:to,
                from:config.twilio.fromNumber,
                body:message
            }, function(error, message) {
                if (!error) {
                    console.log('Success! The SID for this SMS message is:');
                    console.log(message.sid);

                    console.log('Message sent on:');
                    console.log(message.dateCreated);

                    callback('Message Sent on: ' + message.dateCreated);
                }
                else {
                    callback(error.message)
                }
            });
}