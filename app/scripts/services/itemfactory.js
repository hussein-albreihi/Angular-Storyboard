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
		var url3 = 'http://localhost:9999/v1/users';
		var url4 = 'http://localhost:9999/v1/items';

		return {
			getAllItems: function () {
				return $http.get(url + '/items');
			},
			addItem: function (item) {
				console.log(item);
				return $http.post(url4 + '/nullheart/items', item);
			},
			addItemToUser: function (username, id) {
				return $http.post(url3 + '/' + username + '/items' + '/' + id);
			},
			getAllUsers: function () {
				return $http.get(url + '/users');
			},
			deleteWorkitem: function (id) {
				return $http.delete(url4 + '/' + id);
			},
			updateItem: function (id, status) {
				return $http.put(url4 + '/' + id + '/status', status);
			}
		};
	});