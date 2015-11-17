'use strict';


angular.module('wewashApp')
  .controller('AccountCtrl', function ($scope, Client) {

    $scope.user = Client.getUser();
    
  });
