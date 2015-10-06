'use strict';

angular.module('angularProjectApp')
	.controller('ModalCtrl', function ($scope, itemFactory) {
		$scope.modalShown = false;
		$scope.username = '';
		$scope.toggleModal = function () {
			$scope.modalShown = !$scope.modalShown;
		};

		$scope.addUser = function (username) {
			console.log('click');
			itemFactory.addItemToUser(username, 3);
		};

	});