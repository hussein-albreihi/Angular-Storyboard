'use strict';

/**
 * @ngdoc directive
 * @name angularProjectApp.directive:box
 * @description
 * # box
 */
angular.module('angularProjectApp')
	.directive('box', function () {
		return {
			templateUrl: '/scripts/directives/box.html',
			restrict: 'E',
			transclude: true

		};
	});