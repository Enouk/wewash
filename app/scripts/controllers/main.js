'use strict';


angular.module('wewashApp')
  .controller('MainCtrl', function($scope, $location, Client, ProductService) {

    $scope.selection = {

      people: {
        adults: 2,
        teens: 0,
        children: 2,
        babies: 0
      },

      pickups: 8,
      volumes: 5
    };

    $scope.prices = {

      pickup: 50,
      liter: 30
    };

    $scope.products = ProductService.all();
    $scope.subscriptions = ProductService.subscriptions();

    $scope.order = function(product) {

      Client.setProduct(product);

      $location.path('/order');
    };

    $scope.moreInfo = function() {
      $location.path('/faq');
    };

    $scope.selectionChanged = function() {

    };
    
    $scope.getAppropriateSubscription = function() {

      var amount = $scope.selection.pickups * $scope.selection.volumes;

      for (var i = 0; i < $scope.subscriptions.length; i++) {
        var subscription = $scope.subscriptions[i];

        if (subscription.range.max < amount) {
          return subscription;
        }
      }

      return $scope.subscriptions[0];
    };

  });
