'use strict';

/**
 * @ngdoc service
 * @name angularProjectApp.itemFactory
 * @description
 * # itemFactory
 * Factory in the angularProjectApp.
 */
angular.module('angularProjectApp')
  .factory('itemFactory', function () {
    var url = 'http://192.168.68.158/v1/items';
    return {
      getItems: function () {
        return $http.get(url);
      },
      getItem: function (id) {
        return $http.get(url + '/' + id);
      },
      createItem: function (user) {
        return $http.post(url, user);
      },
      deleteItem: function (id) {
        return $http.delete(url + '/' + id);
      }
    };
  });