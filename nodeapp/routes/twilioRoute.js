var twilioModule = require("./../services/twilio")

exports.route = function (request, response) {
    var to = request.body.to;
    var message = request.body.message;

    twilioModule.sendMessage(to, message, function(returned){
        response.send(returned);
    });
};