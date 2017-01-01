app.controller('AuthCtrl', ['$scope','auth','$state', function($scope, auth, $state){
  $scope.user = {};

  $scope.register = function () {
  		//grab the user from the register form
  	 auth.register($scope.user).then(function(){
  	 	$state.go('home');
  	 });

  	 $scope.user = '';
	 $scope.password = '';

  };


}]);