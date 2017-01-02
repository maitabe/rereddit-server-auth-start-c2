app.controller('LoginCtrl', ['$scope','auth', '$state', function($scope, auth, $state){
	$scope.user = {};

	$scope.login = function() {
		console.log('about to login from the controller');
		auth.loginUser($scope.user).then(function(){
			console.log('about to change states to home from the controller');
  	 	$state.go('home');
  	 });

		$scope.user = '';
	  $scope.password = '';

	};

}]);