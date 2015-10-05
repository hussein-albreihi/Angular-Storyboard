'use strict';

/**
 * @ngdoc service
 * @name angularProjectApp.dataFactory
 * @description
 * # dataFactory
 * Factory in the angularProjectApp.
 */
angular.module('angularProjectApp')
  .factory('userFactory', function ($http) {
    var url = 'http://192.168.68.158/v1/users';

    return {
      getAllUsers: function () {
        return $http.get(url);
      },
      getUser: function (id) {
        return $http.get(url + '/' + id);
      },
      createUser: function (user) {
        return $http.post(url, user);
      },
      deleteUser: function (id) {
        return $http.delete(url + '/' + id);
      }
    };
  });
