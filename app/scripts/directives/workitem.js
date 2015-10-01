'use strict';

/**
 * @ngdoc directive
 * @name angularProjectApp.directive:workitem
 * @description
 * # workitem
 */
angular.module('angularProjectApp')
	.directive('workitem', function () {
		return {
			templateUrl: '/scripts/directives/workitem.html',
			restrict: 'E',

		};
	});