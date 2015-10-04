'use strict';

/**
 * @ngdoc function
 * @name wewashApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wewashApp
 */
angular.module('wewashApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
