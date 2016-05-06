// inject ngRoute for all routing needs
angular.module('routerRoutes', ['ngRoute'])

// configure our routes
.config(function($routeProvider, $locationProvider) {
	$routeProvider

		// route for home page
		.when('/', {
			templateUrl : 'views/pages/home.html',
			controller	: 'homeController',
			controllerAs: 'home'
		})

		// route for about pg
		.when('/eecsday', {
			templateUrl : 'views/pages/eecsday.html',
			controller	: 'eecsdayController',
			controllerAs: 'eecsday'
		})

		// route for contact page
		.when('/bearhacks', {
			templateUrl : 'views/pages/bearhacks.html',
			controller	: 'bearhacksController',
			controllerAs: 'bearhacks'
		});

	// set our app to have pretty URLs
	$locationProvider.html5Mode(true);
});