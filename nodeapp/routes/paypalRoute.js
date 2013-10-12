var paypalModule = require("./../services/paypal")

exports.route = function (request, response) {
    var price = request.body.price;
    var description = request.body.description;

    paypalModule.paypal(price, description, function(paymentDetails){

        //Store to session
        request.session.paymentid = response.id;

        response.send(paymentDetails);
    });
};

exports.executeRoute = function (request, response) {
    var payerId = request.query.PayerID;
    var token = request.query.token;

    paypalModule.executePayment(request.session.paymentid, payerId, function(jsonData){
        response.send(jsonData);
    });
};