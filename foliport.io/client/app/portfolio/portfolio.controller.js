(function () {
	'use strict';

	function PortfolioController ($http, $scope, $stateParams, User) {
console.log('username', $stateParams.username);
		User.get({username: $stateParams.username})
			.$promise.then(function (result) {
				$scope.user = result;
			});
	 }

	angular.module('foliPort')
		.controller('PortfolioController', PortfolioController);
}());