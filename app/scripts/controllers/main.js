'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp').controller('MainCtrl', function (itemFactory){
  var items;

  function onError(res) {
    console.log('Error', res);
  }

  function getItems() {
    itemFactory.getItems()
      .then(function (res) {
        items = res.title;
      }, onError);
  }

  getItems();

  this.createItem = function (title, desc) {
    var item= {
      title: title,
      description: desc
    };
    itemFactory.createItem(item)
      .then(getItems, onError);
  };

  this.deleteItem = function (id) {
    itemFactory.deleteItem(id)
      .then(getItems, onError);
  };
});
