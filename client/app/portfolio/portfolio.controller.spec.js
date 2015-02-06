'use strict';

describe('Controller: PortfolioController', function () {

	// load the controller's module
	beforeEach(module('foliPort'));

	var PortfolioController, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		PortfolioController = $controller('PortfolioController', {
			$scope: scope
		});
	}));

	it('should ...', function () {
		expect(1).toEqual(1);
	});
});
