'use strict';

/**
 * @ngdoc directive
 * @name angularProjectApp.directive:workitem
 * @description
 * # workitem
 */
angular.module('angularProjectApp')
	.directive('sbWorkitem', function () {
		return {
			scope: {
				info: '='
			},
			restrict: 'E',
			templateUrl: '/scripts/directives/workitem.html'
		};
	}).controller('sbUpdateFormCtrl', function ($scope, $route, itemFactory) {
		$scope.updateItem = function (status, id) {
			var fix = {
				status: status
			};
			itemFactory.updateItem(id, fix);
			$route.reload();
		};
	});