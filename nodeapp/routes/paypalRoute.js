var paypalModule = require("./../services/paypal")

exports.paypalRoute = function (request, response) {
    var price = request.body.price;
    var description = request.body.description;

    paypalModule.paypal(price, description, function(returned){
        response.send(returned);
    });
};