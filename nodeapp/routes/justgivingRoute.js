var justgiving = require("./../services/justgiving")

exports.donations = function (request, response) {
    var donationId = request.body.donationid;
    var url = _.sprintf()

    justgiving.getDonation(donationId, function(data){
        response.send(data);
    });
};

exports.localCharities = function (request, response) {
    var area = request.body.area;

    justgiving.getLocalCharities(area, function(data){
        response.send(data);
    });
};