app.factory('posts', ['$http', function($http) {
  var postService = {
    posts: [],

    getAll: function() {
      return $http.get('/posts').then(function(data) {

        angular.copy(data.data, postService.posts);
      });
    },

    get: function(id) {
      return $http.get('/posts/' + id).then(function(res){
        return res.data;
      });
    },

    create: function(post) {
      return $http.post('/posts', post).success(function(data){
        postService.posts.push(data);
      });
    },

    upvote: function(post) {
      // TODO: Finish
      return $http.put('/posts/'+ post._id + '/upvote', post).then(function(res) {

            console.log('updateSucceed =', res.data);

            if(!res.data){
                console.error('upvote didnt succeed!' );
            }
        });
    },

    addComment: function(id, comment) {
      return $http.post('/posts/' + id + '/comments', comment);
    },

    upvoteComment: function(post, comment) {
      // TODO: Finish
      return $http.put('/posts/' + post._id +'/comments/' + comment._id + '/upvote');

    }
  };


  return postService;
}]);