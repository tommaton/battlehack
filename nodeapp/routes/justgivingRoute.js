var justgiving = require("./../services/justgiving")

exports.donations = function (request, response) {
    var donationId = request.body.donationid;

    justgiving.getDonation(donationId, function(data){
        response.send(data);
    });
};

exports.localCharities = function (request, response) {
    var area = request.params.area;

    justgiving.getLocalCharities(area, function(data){
        response.send(data);
    });
};