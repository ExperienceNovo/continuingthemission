angular.module( 'ctm.home', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		}
	});
}])

.controller( 'HomeCtrl', [ '$scope', 'titleService', function HomeController( $scope, titleService ) {
	titleService.setTitle('Continuing The Mission');
	$scope.date = new Date();
}]);