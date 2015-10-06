'use strict';

angular.module('angularProjectApp')
	.controller('ModalCtrl', function ($scope, $route, itemFactory) {
		$scope.modalShown = false;
		$scope.username = '';

		$scope.toggleModal = function () {
			$scope.modalShown = !$scope.modalShown;
		};

		$scope.addUser = function (username, id) {
			itemFactory.addItemToUser(username, id);
		};

		function onError(res) {
			console.log('Error', res);
		}
		(function getAllUsers() {
			itemFactory.getAllUsers()
				.then(function (res) {
					$scope.users = res.data;
				}, onError);
		})();

		$scope.deleteWorkitem = function (id) {
			itemFactory.deleteWorkitem(id);
		};

	});