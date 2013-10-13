var paypalModule = require("./../services/paypal")

exports.route = function (request, response) {
    var price = request.body.price;
    var description = request.body.description;

    paypalModule.paypal(price, description, function(paymentDetails){

        //Store to session
        request.session.paymentid = paymentDetails.id;

        response.send(paymentDetails);
    });
};

exports.completeRoute = function (request, response) {
    var payerId = request.query.PayerID;

    paypalModule.completePayment(request.session.paymentid, payerId, function(jsonData){
        response.send(jsonData);
    });
};

exports.cancelRoute = function (request, response) {

    paypalModule.cancelPayment(request.session.paymentid, function(jsonData){
        response.send(jsonData);
    });
};