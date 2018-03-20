(function() {
	'use strict';
	var app = angular.module('chatApp', []);
	app.controller('chatController', ['$scope', function($scope) {
		var socket = io.connect('http://localhost:3000');
		$scope.names = [{
			name: '123'
		},{
			name:'234'
		}];
		console.log($scope.names);
	}]);
})();


