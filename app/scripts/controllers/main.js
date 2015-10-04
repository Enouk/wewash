'use strict';


angular.module('wewashApp')
  .controller('MainCtrl', function ($scope, $location) {

    $scope.Subscription = {
      SMALL: 'small',
      MEDIUM: 'medium', 
      BIG: 'big'
    };

    $scope.order = function() {

    	$location.path('/order');
    };

  });
