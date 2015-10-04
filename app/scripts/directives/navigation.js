'use strict';

angular.module('wewashApp')
  .controller('navigationCtrl', function($scope, $location) {

    $scope.contains = function(viewLocation) {
      return $location.path().indexOf(viewLocation) !== -1;
    };

  });

angular.module('wewashApp')
  .directive('navigation', function () {
    return {
      controller: 'navigationCtrl',
      templateUrl: 'views/navigation.html',
      restrict: 'E', // (2)
      replace: true, // (3)
      transclude: true // (4)
    };
  });
