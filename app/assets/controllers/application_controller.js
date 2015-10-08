demoApp = angular.module('demoApp', ['ngRoute','templates'])

demoApp.config(function ($routeProvider) {
  $routeProvider.
      when('/articles', {
        templateUrl: 'articles/index.html',
        controller: 'articlesIndexCtrl'
      }).
      when('/articles/:article_id', {
        templateUrl: 'articles/show.html',
        controller: 'articlesShowCtrl'
      }).
      otherwise({
        redirectTo: '/articles'
      });
});