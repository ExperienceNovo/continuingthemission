angular.module( 'ctm', [
    'ui.router',
    'sails.io',
    'angularMoment',
    'duScroll',
    'lodash',
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'templates-app',
    'services',
    'models',
    'ctm.home',
    'ctm.about',
    'ctm.donate',
    'ctm.footer',
    'ctm.veterans',
    'ctm.volunteer',
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $urlRouterProvider.when('/about/', '/about');
    $urlRouterProvider.otherwise(function ($injector, $location) {
        if ($location.$$url === '/') {
            window.location = '/';
        }
        else {
            // pass through to let the web server handle this request
            window.location = $location.$$absUrl;
        }
    });
    $locationProvider.html5Mode(true);
}])

.run( function run () {
    moment.locale('en');
})

.controller( 'AppCtrl',['$scope', 'config', '$rootScope', function AppCtrl ( $scope, config, $rootScope) {
    config.currentUser = window.currentUser;
}]);

