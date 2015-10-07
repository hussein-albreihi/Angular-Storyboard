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
				$scope.users = [];
				$scope.username = '';
				$scope.updateItem = function (status, id) {
					var jsonStatus = {
						status: status
					};
					itemFactory.updateItem(id, jsonStatus);
					$route.reload();
				};
				$scope.deleteWorkitem = function () {
					console.log('delete from directive');
					itemFactory.deleteWorkitem($scope.info.id)
						.then(function () {
							if ($scope.$parent.afterDelete) {
								$scope.$parent.afterDelete($scope.info.id);
							}
						});
				};
				$scope.addUser = function (username, id) {
					itemFactory.addItemToUser(username, id);
				};

				function onError(res) {
					console.log('Error', res);
				}
				$scope.toggleModal = function () {
					$scope.modalShown = !$scope.modalShown;
				};
				(function getAllUsers() {
					itemFactory.getAllUsers()
						.then(function (res) {
							$scope.users = res.data;
						}, onError);
				})();
			}
		};
	});