var app = angular.module('tt_demo', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ProductController',
      templateUrl: './components/product/product_list.html'
    })
    .when('/dog/:id', {
      controller: 'ProductDetailController',
      templateUrl: './components/product/product_detail.html'
    });
});