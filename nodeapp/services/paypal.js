var paypal_sdk = require('paypal-rest-sdk'),
    config = require('./../config')

exports.paypal = function (price, description, callback) {
    paypal_sdk.configure({
        'host': 'api.sandbox.paypal.com',
        'client_id': config.paypal.clientId,
        'client_secret': config.paypal.clientSecret
    });

    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": config.paypal.returnUrl,
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

    paypal_sdk.payment.create(create_payment_json, function (err, res) {
        if (err) {
            throw err;
        }

        if (res) {
            console.log("Create Payment Response");

            callback(res);
        }
    });
}