'use strict';

describe('Controller: OffersuccessCtrl', function () {

  // load the controller's module
  beforeEach(module('battlehackApp'));

  var OffersuccessCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OffersuccessCtrl = $controller('OffersuccessCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
