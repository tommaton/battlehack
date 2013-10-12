'use strict';

describe('Service: justGiving', function () {

  // load the service's module
  beforeEach(module('battlehackApp'));

  // instantiate service
  var justGiving;
  beforeEach(inject(function (_justGiving_) {
    justGiving = _justGiving_;
  }));

  it('should do something', function () {
    expect(!!justGiving).toBe(true);
  });

});
