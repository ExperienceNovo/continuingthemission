angular.module( 'ctm.donate', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'donate', {
		url: '/donate',
		views: {
			"main": {
				controller: 'DonateCtrl',
				templateUrl: 'donate/index.tpl.html'
			}
		}
	});
}])

.controller( 'DonateCtrl', [ '$scope', 'titleService', function DonateController( $scope, titleService ) {
	titleService.setTitle('Donate to Continuing The Mission');
}]);