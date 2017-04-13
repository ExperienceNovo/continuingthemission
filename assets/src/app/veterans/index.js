angular.module( 'ctm.veterans', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'veterans', {
		url: '/veterans',
		views: {
			"main": {
				controller: 'VeteransCtrl',
				templateUrl: 'veterans/index.tpl.html'
			}
		}
	});
}])

.controller( 'VeteransCtrl', [ '$scope', 'titleService', function VeteransController( $scope, titleService ) {
	titleService.setTitle('Veterans - Continuing The Mission');
}]);