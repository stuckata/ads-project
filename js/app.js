'use strict';

var app = angular.module('adsApp', ['ngRoute', 'ngResource', 'LocalStorageModule', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl'
	});
	$routeProvider.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginCtrl'
	});
	$routeProvider.when('/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterCtrl'
	});
	$routeProvider.when('/publish-ad', {
		templateUrl: 'templates/user/publish-ad.html',
		controller: 'PublishAdCtrl'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
}]);