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
		return {
			getAllItems: function () {
				return $http.get(url);
			}
		};
	});