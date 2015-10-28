'use strict';

describe('Directive: homeNavigation', function () {

  // load the directive's module
  beforeEach(module('wewashApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<home-navigation></home-navigation>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the homeNavigation directive');
  }));
});
