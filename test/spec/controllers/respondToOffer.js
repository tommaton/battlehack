'use strict';

describe('Controller: RespondtoofferCtrl', function () {

  // load the controller's module
  beforeEach(module('battlehackApp'));

  var RespondtoofferCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RespondtoofferCtrl = $controller('RespondtoofferCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
