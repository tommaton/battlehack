'use strict';

describe('Service: paypal', function () {

  // load the service's module
  beforeEach(module('battlehackApp'));

  // instantiate service
  var paypal;
  beforeEach(inject(function (_paypal_) {
    paypal = _paypal_;
  }));

  it('should do something', function () {
    expect(!!paypal).toBe(true);
  });

});
