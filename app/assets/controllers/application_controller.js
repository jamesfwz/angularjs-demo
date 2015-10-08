articleApp = angular.module('articleApp', ['ngRoute','templates','articleServices','ngAnimate'])

articleApp.config(function ($routeProvider) {
  $routeProvider.
      when('/articles', {
        templateUrl: 'articles/index.html',
        controller: 'articlesIndexCtrl'
      }).
      when('/articles/:id', {
        templateUrl: 'articles/show.html',
        controller: 'articlesShowCtrl'
      }).
      otherwise({
        redirectTo: '/articles'
      });
});