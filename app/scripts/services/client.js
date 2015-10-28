'use strict';


angular.module('wewashApp')
  .service('Client', function () {
    
    var _product;

    this.getProduct = function() {
    	return _product;
    };

    this.setProduct = function(product) {
    	_product = product;
    };

  });
