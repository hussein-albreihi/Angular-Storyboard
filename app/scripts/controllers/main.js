'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp').controller('MainCtrl', function ($scope, itemFactory) {
  $scope.items = [];

  function onError(res) {
    console.log('Error', res);
  }

  function getAllItems() {
    itemFactory.getAllItems()
      .then(function (res) {
        $scope.items = res.data;
      }, onError);
  }

  getAllItems();



  $scope.addUser = function (username, id) {
    itemFactory.addItemToUser(username, id);
  };

  $scope.afterDelete = function (id) {
    $scope.items = $scope.items.filter(function (item) {
      return item.id !== id;
    });
  };
});