var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	
	$routeProvider
		.when('/homepage',{
			templateUrl: 'homepage.html'
		})
		.when('/profile',{
			templateUrl: 'profile.html'
		})
		.when('/contactus',{
			templateUrl: 'contactus.html'
		})
		.otherwise({
			redirectTo: '/home'
		});
});