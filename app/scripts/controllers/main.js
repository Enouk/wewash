'use strict';


angular.module('wewashApp')
  .controller('MainCtrl', function($scope, $location, Client, ProductService) {

    $scope.selection = {

      subscription: undefined
    };

    $scope.init = function() {

      ProductService.getProducts()
        .success(function(products) {
          Client.setProducts(products);

          $scope.products = Client.getProducts();
          $scope.subscriptions = Client.getSubscriptions();
        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej hämta produktlistan';
        });
    };

    $scope.init();

    $scope.moreInfo = function() {
      $location.path('/faq');
    };

    $scope.subscribe = function(subscription) {

      Client.setSubscription(subscription);

      $location.path('/order');
    };

    $scope.getProduct = function(id) {
      return Client.getProduct(id);
    };

  });
