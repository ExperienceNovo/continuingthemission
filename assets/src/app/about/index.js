angular.module( 'ctm.about', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'about', {
		url: '/',
		views: {
			"main": {
				controller: 'AboutCtrl',
				templateUrl: 'about/index.tpl.html'
			}
		}
	});
}])

.controller( 'AboutCtrl', [ '$scope', 'titleService', function AboutController( $scope, titleService ) {
	titleService.setTitle('About Continuing The Mission');
}]);