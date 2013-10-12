var paypal_sdk = require('paypal-rest-sdk');

module.exports.makePayment = function (clientid, clientsecret) {
    paypal_sdk.configure({
        'host': 'api.sandbox.paypal.com',
        'port': '',
        'client_id': clientid,
        'client_secret': clientsecret
    });

    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http:\/\/www.bbc.co.uk\/",
            "cancel_url": "http:\/\/www.paypal.com\/"
        },
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "1.00"
            },
            "description": "This is the payment description."
        }]
    };

    paypal_sdk.payment.create(create_payment_json, config_opts, function (err, res) {
        if (err) {
            throw err;
        }

        if (res) {
            console.log("Create Payment Response");
            console.log(res);
        }
    });
}