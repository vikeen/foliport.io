/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
	Thing.create({
		name : 'Development Tools',
		info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
	}, {
		name : 'Server and Client integration',
		info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
	}, {
		name : 'Smart Build System',
		info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
	},	{
		name : 'Modular Structure',
		info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
	},	{
		name : 'Optimized Build',
		info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
	},{
		name : 'Deployment Ready',
		info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
	});
});

User.find({}).remove(function() {
	User.create(
		{
			provider: 'local',
			username: 'terraespinosa',
			email: 'terra@terra.com',
			password: 'terra',
			portfolioData: {
				firstName: "Terra",
				lastName: "Espinosa",
				logo: true,
				businessName: "TME Photography",
				albums: [
					{
						albumName: "Portraits",
						url: "http://rodenbeek.com/preview/tme/portaits",
						sortOrder: 1
					}
				],
				settings: {
					font: 	"",
					theme: 	""
				},
				contactInfo: {
					phone: 	"(123)555-3311",
					mobile: "(321)555-1133",
					streetAddress: "",
					city: 	"",
					state: 	"",
					zip: 	""
				},
				social: {
					facebook: "",
					twitter: "",
					imgur: "",
					deviantArt: ""
				}
			}
		},
		{
			provider: 'local',
			username: 'testuser',
			email: 'test@test.com',
			password: 'test',
			portfolioData: {
				firstName: 'Test',
				lastName: 'User',
			}
		},
		{
			provider: 'local',
			role: 'admin',
			username: 'admin',
			email: 'admin@admin.com',
			password: 'admin',
			portfolioData: {
				firstName: 'Admin',
				lastName: 'Istrator'
			}
		},
		function() {
			console.log('finished populating users');
		}
	);
});