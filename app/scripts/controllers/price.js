'use strict';


angular.module('wewashApp')
  .controller('PriceCtrl', function($scope, $location, ProductService, Client) {

    $scope.subscriptions = Client.getSubscriptions();

    $scope.subscribe = function(subscription) {

      Client.setSubscription(subscription);

      $location.path('/order');
    };

    $scope.getProduct = function(id) {
      return Client.getProduct(id);
    };

  });
