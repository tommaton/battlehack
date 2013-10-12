'use strict';

describe('Controller: MakeofferCtrl', function () {

  // load the controller's module
  beforeEach(module('battlehackApp'));

  var MakeofferCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MakeofferCtrl = $controller('MakeofferCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
