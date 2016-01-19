/**
 * Created by awissel on 19/11/15 - CW47.
 */
angular.module('tt_demo')
.service('ProductService', function($http) {
  var self = this;

  this.getDog = function(dogId) {
    return $http.get('http://localhost:3000/dog/' + dogId);
  }

  this.getDogs = function() {
    return $http.get('http://localhost:3000/dogs');
  };

  this.editDogName = function(id, name) {
    return $http.post('http://localhost:3000/dog/' + id + '/edit/' + name);
  };

  this.initSocket = function(scope) {
    socket.on('dogNameChange', function(dog) {
      scope.$emit('dogNameChange', dog);
    });
  };

});