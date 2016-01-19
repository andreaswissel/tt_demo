angular.module('tt_demo')
.controller('ProductController', function($scope, $location, ProductService) {
  ProductService.getDogs()
    .then(function(response) {
      if(response.data.length > 0) {
        $scope.dogs = response.data;
      } else {
        throw "DoggiesOutOfHouseException";
      }
    })
    .catch(function(error) {
      console.log(error);
    });

  $scope.goToDog = function(id) {
    $location.path('/dog/' + id);
  }
});