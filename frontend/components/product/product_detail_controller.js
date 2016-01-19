angular.module('tt_demo')
.controller('ProductDetailController', function($routeParams, $scope, ProductService, $timeout) {
  var dogId = $routeParams.id;

  ProductService.initSocket($scope);

  $scope.$on('dogNameChange', function(evt, dog) {
    $timeout(function() {
      $scope.dog = dog;
    });
  });

  $scope.nameEditable = false;

  ProductService.getDog(dogId).then(function(response) {
    $scope.dog = response.data;
  });

  $scope.toggleEdit = function() {
    if($scope.nameEditable) {
      ProductService.editDogName($scope.dog.id, $scope.dog.name);
    };
    $scope.nameEditable = !$scope.nameEditable
  };
});