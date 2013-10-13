'use strict';

describe('Controller: LenderResponseCtrl', function () {

  // load the controller's module
  beforeEach(module('battlehackApp'));

  var LenderResponseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LenderResponseCtrl = $controller('LenderResponseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
