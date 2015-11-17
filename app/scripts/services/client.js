'use strict';


angular.module('wewashApp')
  .service('Client', function() {

    var _user = {
      firstName: 'Adam',
      lastName: 'Karlsson',
      adress: 'Almvägen 9 360 44 Växjö',
      email: 'Adam.Karlsson@gmail.com'
    };

    var _products;
    var _subscriptions;
    var _subscription;

    this.getUser = function() {
      return _user;
    };

    this.setUser = function(user) {
      _user = user;
    };

    this.getSubscription = function() {
      return _subscription;
    };

    this.setSubscription = function(subscription) {
      _subscription = subscription;
    };

    this.getProduct = function(id) {
      for (var i = 0; i < _products.length; i++) {
        var product = _products[i];
        if (product.id === id) {
          return product;
        }
      }

      return undefined;
    };

    this.getProducts = function() {
      return _products;
    };

    this.setProducts = function(products) {
      _products = products;
      _subscriptions = this.extractSubscriptions(products);
    };

    this.getSubscriptions = function() {
      return _subscriptions;
    };

    // Private functions
    this.extractSubscriptions = function(products) {

      var subscriptions = [];

      for (var i = 0; i < products.length; i++) {
        var product = products[i];
        // TODO maybe check type here
        if (product.products !== undefined) {
          subscriptions.push(product);
        }
      }

      return subscriptions;

    };

  });
