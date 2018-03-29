var app = angular.module('chatApp', ['ngMaterial']);
(function() {
	'use strict';
	app.controller('chatController', ['$scope','$compile', function($scope, $compile) {
		var socket = io.connect('http://localhost:3000');
		$scope.names = [{
			name: '123'
		},{
			name:'234'
		}];

		$scope.sendMessage = function() {
			socket.emit('chat', {
				message: $scope.msg
			});
		};

		socket.on('chat', function(data) {
			console.log(data);
			var msgBody = document.getElementsByClassName('msgBody');
			angular.element(msgBody).append($compile('<msg-content msg="' + $scope.msg +'"></msg-content>')($scope));

		});
		console.log($scope.names);
	}]);

	app.directive('msgContent', function() {
		return {
			restrict: 'E',
			templateUrl: 'messageContent.html',
			scope: {
				message: '=msg'
			}
		};
	});
})(app);


