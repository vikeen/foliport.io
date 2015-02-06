(function () {
	'use strict';
	var portfolioTemplateBase = '/app/portfolio/templates/';

	function headerBannerLogo ($timeout) {
		return {
			restrict: 'A',
			link: function($scope) {
				$scope.logoImgSrc = 'foliport' || $scope.user.businessName;
			},
			templateUrl: portfolioTemplateBase + 'header-banner-logo.html'
		};
	}
	function headerBannerTagline () {
		return {
			restrict: 'A',
			link: function($scope) {
				$scope.user.then(function (user) {
					$scope.user = user;
				});
			},
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
		// angular.module('foliPort')
		// 	.directive('headerBannerTagline', headerBannerTagline);
		// angular.module('foliPort')
		// 	.directive('headerNav', headerNav);
}());