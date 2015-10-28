'use strict';

describe('Service: productservice', function () {

  // load the service's module
  beforeEach(module('wewashApp'));

  // instantiate service
  var productservice;
  beforeEach(inject(function (_productservice_) {
    productservice = _productservice_;
  }));

  it('should do something', function () {
    expect(!!productservice).toBe(true);
  });

});
