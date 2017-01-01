app.controller('LoginCtrl', ['$scope','auth', '$state', function($scope, auth, $state){
	$scope.user = {};

	$scope.login = function() {

		auth.loginUser($scope.user).then(function(){
  	 	$state.go('home');
  	 });

		$scope.user = '';
	  $scope.password = '';

	};

}]);