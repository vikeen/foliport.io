'use strict';

angular.module('foliPort')
	.config(function ($stateProvider) {
		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'app/main/main.html',
				controller: 'MainCtrl'
			});
	});

// scrape username from url
// get user data
// populate header (logo, tagline), album nav, active album carousel