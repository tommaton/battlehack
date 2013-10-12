'use strict';

describe('Service: twillio', function () {

  // load the service's module
  beforeEach(module('battlehackApp'));

  // instantiate service
  var twillio;
  beforeEach(inject(function (_twillio_) {
    twillio = _twillio_;
  }));

  it('should do something', function () {
    expect(!!twillio).toBe(true);
  });

});
