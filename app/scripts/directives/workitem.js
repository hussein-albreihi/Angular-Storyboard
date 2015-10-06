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
      scope: {
        info: '='
      },
			restrict: 'AE',
			templateUrl: '/scripts/directives/workitem.html',
      controller: ['$scope', function(){

      }];
		};
	});
