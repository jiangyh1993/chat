var app = angular.module('chatApp');
(function() {
	'use strict';
	app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/');
		$locationProvider.hashPrefix('!');
		$locationProvider.html5Mode(true);
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: './home.html'
			})
			.state('chat', {
				url: '/chat',
				templateUrl: './chat.html',
				controller: 'chatController'
			})
			.state('login', {
				url: '/login',
				templateUrl: './login.html'
			});
	});

	app.factory('chatFactory', function() {

	});
})(app);