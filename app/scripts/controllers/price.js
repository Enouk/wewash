'use strict';


angular.module('wewashApp')
  .controller('PriceCtrl', function($scope, $location, ProductService, Client) {

    $scope.products = ProductService.all();

    $scope.order = function(product) {

      Client.setProduct(product);

      $location.path('/order');
    };

  });
