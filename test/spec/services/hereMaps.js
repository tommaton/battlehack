'use strict';

describe('Service: hereMaps', function () {

  // load the service's module
  beforeEach(module('battlehackApp'));

  // instantiate service
  var hereMaps;
  beforeEach(inject(function (_hereMaps_) {
    hereMaps = _hereMaps_;
  }));

  it('should do something', function () {
    expect(!!hereMaps).toBe(true);
  });

});
