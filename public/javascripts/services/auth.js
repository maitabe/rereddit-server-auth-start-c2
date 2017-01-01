app.factory('auth', ['$http', '$window', function ($http, $window) {
   var auth = {};

   auth.saveToken = function (token) {
     $window.localStorage['rereddit-jwt'] = token;
   };

   auth.register = function (user){
   	return $http.post('/register', user).then(function(data) {
   		console.log('back');
   		console.log(data);
   		auth.saveToken(data.data.token);
   	});
   };

  return auth;
}]);