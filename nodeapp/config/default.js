module.exports = {
    paypal: {
        clientId: "",
        clientSecret:  "",
        returnUrl: "http:\/\/localhost:8080\/#\/offerSuccess?productid=%s&username=%s",
        cancelUrl: "http:\/\/localhost:8080\/#\/paymentcancel"
    },

    twilio: {
        sid: "",
        authToken: "",
        fromNumber: ""
    },

    justgiving: {
        apiKey: "84e9d29a",
        getDonation: "https:\/\/api.justgiving.com\/%s\/v1\/donation\/%s",
        searchCharities: "https:\/\/api.justgiving.com\/%s/v1/charity/search?q=%s&pageSize=3"
    }
}