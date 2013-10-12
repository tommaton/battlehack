exports.route = function (request, response) {
    var price = request.params.price;
    var description = request.params.description;

    response.send(description);
};