/* Controllers to display page specifice messages */

angular.module('RouteControllers', [])

.controller('MainController', function($scope){
	$scope.message = "Welcome to the Monkees Fan Page!";
})

.controller('AboutController', function($scope){
	$scope.message = "About the Band";
})

.controller('MusicController', function($scope){
	$scope.message = "Listen to some of our music";
})

.controller('PerformanceController', function($scope){
	$scope.message = "See us Perform!";
})

.controller('ContactController', function($scope){
	$scope.message = "Book us for a show";
});

