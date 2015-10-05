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

  (function getAllItems() {
    itemFactory.getAllItems()
      .then(function (res) {
        items = res.data;
        console.log(items);
      }, onError);
  })();

});
