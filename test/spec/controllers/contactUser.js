'use strict';

describe('Controller: ContactuserCtrl', function () {

  // load the controller's module
  beforeEach(module('battlehackApp'));

  var ContactuserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactuserCtrl = $controller('ContactuserCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
