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
		var url = 'http://192.168.68.158:9999/v1/teams/nullheart/items';
		var url2 = 'http://192.168.68.158:9999/v1/items/nullheart/items';
		return {
			getAllItems: function () {
				return $http.get(url);
			},
			addItem: function (item) {
				console.log(item);
				return $http.post(url2, item);
			}
		};
	});