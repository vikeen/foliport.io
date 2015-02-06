(function () {
	'use strict';
	var portfolioTemplateBase = '/app/portfolio/templates/';

	function headerBannerLogo ($timeout) {
		return {
			restrict: 'A',
			controllerAs: 'headerController',
			controller: ['$http', '$scope', '$stateParams', 'User',
				function ($http, $scope, $stateParams, User) {
					console.log('username', $stateParams.username);
					User.get({username: $stateParams.username})
						.$promise.then(function (result) {
							var img = '/assets/images/logos/';
							$scope.user = result;
							$scope.logoImgSrc = img + $scope.user.businessName + '.svg';
							console.log($scope.user);
						})
						.catch(function (err) {
							$scope.logoImgSrc = 'foliport';
							console.log('header banner logo failed: ', err);
						});
			}],
			link: function($scope) {
				$scope.logoImgSrc = '';
			},
			templateUrl: portfolioTemplateBase + 'header-banner-logo.html'
		};
	}
	function headerBannerTagline () {
		return {
			restrict: 'A',
			templateUrl: 'templates/header-banner-tagline.html'
		};
	}
	function headerNav (){
				return {
					restrict: 'A',
					link: function($scope) {
						$scope.user.then(function (user) {
							$scope.albums = user.albums;
						});
			},
			templateUrl: 'templates/header-nav.html'
			};
	}

	angular.module('foliPort')
			.directive('headerBannerLogo', headerBannerLogo);
		angular.module('foliPort')
			.directive('headerBannerTagline', headerBannerTagline);
		// angular.module('foliPort')
		// 	.directive('headerNav', headerNav);
}());