var paypal_sdk = require('paypal-rest-sdk'),
    config = require('config'),
    _ = require('underscore.string');

exports.paypal = function (price, description, productid, username, callback) {
    paypal_sdk.configure({
        'host': 'api.sandbox.paypal.com',
        'client_id': config.paypal.clientId,
        'client_secret': config.paypal.clientSecret
    });

    var returnUrl = _.sprintf(config.paypal.returnUrl, productid, username);

    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": returnUrl,
            "cancel_url": config.paypal.cancelUrl
        },
        "transactions": [{
            "amount": {
                "currency": "GBP",
                "total": price
            },
            "description": description
        }]
    };

    paypal_sdk.payment.create(create_payment_json, function (error, response) {
        if (error) {
            throw error;
        }

        if (response) {
            callback(response);
        }
    });
}

exports.completePayment = function (paymentId, callback) {
    var payerIdJson = { "payer_id": payerId };

    paypal_sdk.payment.execute(paymentId, payerIdJson, function(error, response){
        if(error){
            callback('Error: ' + error);
        }
        else{
            callback(response);
        }
    });
}

exports.cancelPayment = function (paymentId, callback) {

    paypal_sdk.payment.void(paymentId, function(error, response){
        if(error){
            callback('Error: ' + error);
        }
        else{
            callback(response);
        }
    });
}