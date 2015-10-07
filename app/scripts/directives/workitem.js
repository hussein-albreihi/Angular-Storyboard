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
				info: '=',
				afterDelete: '='
			},
			restrict: 'E',
			templateUrl: '/scripts/directives/workitem.html',
			controller: function ($scope, $route, itemFactory) {
				$scope.modalShown = false;
				$scope.updateItem = function (status, id) {
					var fix = {
						status: status
					};
					itemFactory.updateItem(id, fix);
					$route.reload();
				};
				$scope.deleteWorkitem = function () {
					console.log('delete from directive');
					itemFactory.deleteWorkitem($scope.info.id)
						.then(function () {
							console.log($scope.afterDelete);
							if ($scope.afterDelete) {
								$scope.afterDelete($scope.info.id);
							}
						});


					/*
					$scope.items = $scope.items.filter(function (item) {
						return item.id !== id;
					});
					console.log($scope.items);

					
					for (var x = 0; x < $scope.items.length; x++) {
					  if ($scope.items[x].id === id) {
					    $scope.items.splice(x, 1);

						  }
					}*/
				};
				$scope.toggleModal = function () {
					console.log('CLicked!');
					$scope.modalShown = !$scope.modalShown;
				};
			}
		};
	});