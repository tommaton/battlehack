module.exports = {
    paypal: {
        clientId: "AdeqvhCTW_h3FI3Zv96BQUNvWnaJfuicpddS5WyqSLYrZElghhiwQRXsGFYt",
        clientSecret:  "ECuYzxCLb7vhh0ozh3xHtm-iy_XMKP8iSvjky5fe1vhNl1tExelpm7QxeyiU",
        returnUrl: "http://localhost:8080/#/offerSuccess?productid=%s&username=%s",
        cancelUrl: "http://localhost:8080/#/paymentcancel"
    },

    twilio: {
        sid: "AC3c3b4bbff8b2371a5ca86250ae981f4f",
        authToken: "9f87261dc3292ba8895af6c1a35d9abe",
        fromNumber: "441325952405"
    },

    justgiving: {
        apiKey: "84e9d29a",
        getDonation: "https:\/\/api.justgiving.com\/%s\/v1\/donation\/%s",
        searchCharities: "https:\/\/api.justgiving.com\/%s/v1/charity/search?q=%s&pageSize=3"
    }
}