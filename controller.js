var app = angular.module("userProfile");

app.controller('userControl', function($scope, mainService) {
	$scope.getUsers = function() {
		$scope.users = mainService.getData();
	}

$scope.getUsers()

})