'use strict';

describe('Controller: ConfirmationfailCtrl', function () {

  // load the controller's module
  beforeEach(module('battlehackApp'));

  var ConfirmationfailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfirmationfailCtrl = $controller('ConfirmationfailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
