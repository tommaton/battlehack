var justgiving = require("./../services/justgiving")

exports.route = function (request, response) {
    justgiving.justgivingService();
};