angular.module( 'ctm.volunteer', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'volunteer', {
		url: '/volunteer',
		views: {
			"main": {
				controller: 'VolunteerCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		}
	});
}])

.controller( 'VolunteerCtrl', [ '$scope', 'titleService', function VolunteerController( $scope, titleService ) {
	titleService.setTitle('Volunteer for Continuing The Mission');
}]);