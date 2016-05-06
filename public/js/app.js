angular.module('routerApp', ['routerRoutes', 'ngAnimate'])

// create controllers
// this is controller for entire site
	.controller('mainController', function() {
		var vm = this;

		// create a bigMessage var to dispaly in view 
		vm.bigMessage = 'A smooth sea never made a skilled salior.';
	})

	// home page specific controller
	.controller('homeController', function() {
		var vm  = this;
		vm.message = "Overview of 2016 Events";
	})

	// about page controller
	.controller('eecsdayController', function() {
		var vm = this; 
		vm.message = "Look! I am an about page.";
	})

	// contact page controller
	.controller('bearhacksController', function() {
		var vm = this;
		vm.message = "Contact us! jk this is just a demo lol.";
	});
