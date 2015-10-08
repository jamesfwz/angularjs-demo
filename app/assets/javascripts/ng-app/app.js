demoApp = angular.module('demoApp', ['ngRoute','templates'])

demoApp.config(function ($routeProvider) {
  $routeProvider.when('/articles', {
    templateUrl: 'articles/index.html',
    controller: 'articlesIndexCtrl'
  });

  $routeProvider.otherwise({
    templateUrl: 'articles/index.html',
    controller: 'articlesIndexCtrl'
  });
});