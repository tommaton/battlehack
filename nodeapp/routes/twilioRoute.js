var twilioModule = require("./../services/twilio")

exports.twilioRoute = function (request, response) {
    var to = request.body.to;
    var message = request.body.message;

    twilioModule.sendMessage(to, message, function(returned){
        response.send(returned);
    });
};