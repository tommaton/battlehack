var twilioModule = require("./../services/twilio")

exports.route = function (request, response) {
    var toNumber = request.body.tonum;
    var message = request.body.tomessage;

    twilioModule.sendMessage(toNumber, message, function(returned){
        response.send(returned);
    });
};