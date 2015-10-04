'use strict';

/**
 * @ngdoc overview
 * @name wewashApp
 * @description
 * # wewashApp
 *
 * Main module of the application.
 */
angular
  .module('wewashApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/price', {
        templateUrl: 'views/price.html',
        controller: 'PriceCtrl'
      })
      .when('/how', {
        templateUrl: 'views/how.html',
        controller: 'HowCtrl'
      })
      .when('/order', {
        templateUrl: 'views/order.html',
        controller: 'OrderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
