/* Angualr routing for Single PAge Applciation */

angular.module('myApp', ['ngRoute', 'RouteControllers']);

angular.module('myApp').config(function($routeProvider, $locationProvider){
$locationProvider.html5Mode(true);
	$routeProvider

	.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'MainController'
	})

	.when('/about', {
		templateUrl : 'pages/about.html',
		controller : 'AboutController'
	})

	.when('/music', {
		templateUrl : 'pages/music.html',
		controller : 'MusicController'
	})

	.when('/performance', {
		templateUrl : 'pages/performance.html',
		controller : 'PerformanceController'
	})

	.when('/contact', {
		templateUrl : 'pages/contact.html',
		controller : 'ContactController'
	})

	.otherwise({redirectTo: '/'});
});


