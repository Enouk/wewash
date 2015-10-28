'use strict';


angular.module('wewashApp')
  .controller('OrderCtrl', function($scope, $location, Client) {

    $scope.product = Client.getProduct();

    $scope.confirm = function() {
      $location.path('/home');
    };

  });
