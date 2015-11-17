'use strict';


angular.module('wewashApp')
  .service('ProductService', function($http) {

    this.getProducts = function() {
      return $http.get('/data/products.json');
    };

  });
