'use strict';

angular.module('foliPort')
	.factory('User', function ($resource) {
		return $resource('/api/users/:username/:controller', {
			username: '@_username'
		},
		{
			changePassword: {
				method: 'PUT',
				params: {
					controller:'password'
				}
			},
			get: {
				method: 'GET',
				params: {
					username:'me'
				}
			}
		});
	});