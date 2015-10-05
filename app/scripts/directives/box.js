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
			restrict: 'E',
			transclude: true,
			templateUrl: '/scripts/directives/box.html'
		};
	});
