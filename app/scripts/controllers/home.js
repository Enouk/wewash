'use strict';

/**
 * @ngdoc function
 * @name wewashApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the wewashApp
 */
angular.module('wewashApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
