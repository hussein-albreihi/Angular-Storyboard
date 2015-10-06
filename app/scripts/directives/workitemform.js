'use strict';

/**
 * @ngdoc directive
 * @name angularProjectApp.directive:workitemForm
 * @description
 * # workitemForm
 */
angular.module('angularProjectApp')
	.directive('sbWorkitemForm', function () {
		return {
			restrict: 'E',
			templateUrl: '/scripts/directives/workitem-form.html'
		};
	}).controller('sbFormCtrl', function ($scope, itemFactory) {
		$scope.item = {};
		$scope.sendForm = function () {
			itemFactory.addItem($scope.item);
			console.log('click');
		};
	});