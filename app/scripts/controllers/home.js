'use strict';


angular.module('wewashApp')
  .controller('HomeCtrl', function ($scope) {

    $scope.subscription = {
      id: 'lilla',
      name: 'Abonnemang Lilla',
      range: {
        min: 0,
        max: 30
      },
      max: 30,
      pickups: 4,
      price: 600
    };

    $scope.used = {
    	pickups: 2,
    	amount: 15
    };

    $scope.ORDER_STATUS = {
    	ORDER_PLACED: 'order_placed',
    	PRE_PICKUP: 'pre_pickup',
    	POST_PICKUP: 'post_pickup',
    	CANCELLED: 'cancelled'
    };

    $scope.order = {
    	created: '2015-10-12 19:30',
    	status: $scope.ORDER_STATUS.ORDER_PLACED,
    	pickup: '2015-10-13 18:00',
    	notes: []
    };

    $scope.cancel = function() {
		$scope.order.status = $scope.ORDER_STATUS.CANCELLED;
    };

    $scope.pickup = function() {
		$scope.order.status = $scope.ORDER_STATUS.ORDER_PLACED;
    };

  });
