'use strict';

/**
 * @ngdoc service
 * @name angularProjectApp.itemFactory
 * @description
 * # itemFactory
 * Factory in the angularProjectApp.
 */
angular.module('angularProjectApp')
	.factory('itemFactory', function ($http) {
		var url = 'http://localhost:9999/v1/teams/nullheart';
		var url2 = 'http://localhost:9999/v1/items/nullheart/items';
		var url3 = 'http://localhost:9999/v1/users';

		return {
			getAllItems: function () {
				return $http.get(url + '/items');
			},
			addItem: function (item) {
				console.log(item);
				return $http.post(url2, item);
			},
			addItemToUser: function (username, id) {
				return $http.post(url3 + '/' + username + '/items' + '/' + id);
			},
			getAllUsers: function () {
				return $http.get(url + '/users');
			}
		};
	});