'use strict';

angular.module('wewashApp')
  .controller('homeNavigationCtrl', function($scope, $location) {

    $scope.contains = function(viewLocation) {
      return $location.path().indexOf(viewLocation) !== -1;
    };

  });

angular.module('wewashApp')
  .directive('homeNavigation', function() {
    return {
      controller: 'homeNavigationCtrl',
      templateUrl: 'views/home-navigation.html',
      restrict: 'E', // (2)
      replace: true, // (3)
      transclude: true // (4)
    };
  });
