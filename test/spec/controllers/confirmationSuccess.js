'use strict';

describe('Controller: ConfirmationsuccessCtrl', function () {

  // load the controller's module
  beforeEach(module('battlehackApp'));

  var ConfirmationsuccessCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfirmationsuccessCtrl = $controller('ConfirmationsuccessCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
