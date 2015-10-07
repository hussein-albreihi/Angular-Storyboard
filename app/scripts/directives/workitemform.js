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
			templateUrl: '/scripts/directives/workitem-form.html',
			controller: function ($scope, $route, itemFactory) {
				$scope.item = {};
				$scope.modalShown = false;
				$scope.sendForm = function () {
					itemFactory.addItem($scope.item);
					console.log('click');
					itemFactory.getAllItems();
					$route.reload();
				};

				$scope.toggleModal = function () {
					$scope.modalShown = !$scope.modalShown;
				};
			}
		};
	});