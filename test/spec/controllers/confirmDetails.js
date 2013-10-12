'use strict';

describe('Controller: ConfirmdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('battlehackApp'));

  var ConfirmdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfirmdetailsCtrl = $controller('ConfirmdetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
