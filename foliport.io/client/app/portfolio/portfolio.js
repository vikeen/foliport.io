'use strict';

angular.module('foliPort')
	.config(function ($stateProvider) {
		$stateProvider
			.state('portfolio', {
				url: '/:username',
				templateUrl: '/app/portfolio/portfolio.html',
				controller: 'PortfolioController'
			});
	});

// ---------------------------------
// Make a Portfolio Service Endpoint that returns everything the Directives require
// ---------------------------------