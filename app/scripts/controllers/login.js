'use strict';


angular.module('wewashApp')
  .controller('LoginCtrl', function($scope, $location) {

    $scope.signin = function() {
      $location.path('/home');
    };

  });
