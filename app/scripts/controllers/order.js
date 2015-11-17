'use strict';


angular.module('wewashApp')
  .controller('OrderCtrl', function($scope, $location, Client) {

    $scope.subscription = Client.getSubscription();

    $scope.confirm = function() {
      $location.path('/home');
    };

    $scope.getProduct = function(id) {
      return Client.getProduct(id);
    };

  });
