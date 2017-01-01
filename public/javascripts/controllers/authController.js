app.controller('AuthCtrl', ['$scope','auth', function($scope, auth){
  $scope.user = {};

  $scope.register = function () {
  		//grab the user from the register form
  	 auth.register($scope.user);

  	 $scope.user = '';
	 $scope.password = '';

  };



}]);