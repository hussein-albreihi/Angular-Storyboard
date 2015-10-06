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
	});
