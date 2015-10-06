'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp').controller('MainCtrl', function ($scope, itemFactory) {
  $scope.items;
  $scope.modalShown = false;
  $scope.username = '';

  function onError(res) {
    console.log('Error', res);
  }

  (function getAllItems() {
    itemFactory.getAllItems()
      .then(function (res) {
        $scope.items = res.data;
      }, onError);
  })();


  $scope.toggleModal = function () {
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.addUser = function (username, id) {
    itemFactory.addItemToUser(username, id);
  };

  $scope.deleteWorkitem = function (id) {
    itemFactory.deleteWorkitem(id);
  };
});
