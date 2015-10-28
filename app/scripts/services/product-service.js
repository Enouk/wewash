'use strict';


angular.module('wewashApp')
  .service('ProductService', function() {

    var _products = [{
      id: 'abonnemang_lilla',
      name: 'Abonnemang Lilla',
      price: 289,
      count: 1
    }, {
      id: 'abonnemang_mellan',
      name: 'Abonnemang Mellan',
      price: 249,
      count: 2
    }, {
      id: 'abonnemang_stora',
      name: 'Abonnemang Stora',
      price: 219,
      count: 3
    }];

    var _subscriptions = [{
      id: 'sub_small',
      name: 'Abonnemang Lilla',
      range: {
        min: 0,
        max: 30
      },
      pickups: 4,
      price: 600
    }, {
      id: 'sub_medium',
      name: 'Abonnemang Mellan',
      range: {
        min: 0,
        max: 60
      },
      pickups: 6,
      price: 900
    }, {
      id: 'sub_big',
      name: 'Abonnemang Stora',
      range: {
        min: 0,
        max: 90
      },
      pickups: 8,
      price: 1200
    }];

    this.all = function() {

      return _products;
    };

    this.subscriptions = function() {
      return _subscriptions;
    };

  });
