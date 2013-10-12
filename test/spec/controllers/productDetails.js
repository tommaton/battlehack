'use strict';

describe('Controller: ProductdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('battlehackApp'));

  var ProductdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductdetailsCtrl = $controller('ProductdetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
