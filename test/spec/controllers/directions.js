'use strict';

describe('Controller: DirectionsCtrl', function () {

  // load the controller's module
  beforeEach(module('battlehackApp'));

  var DirectionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirectionsCtrl = $controller('DirectionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
