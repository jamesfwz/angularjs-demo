articleApp = angular.module('articleApp', ['ngRoute','templates','articleServices','ngAnimate'])

articleApp.config(function ($routeProvider) {
  $routeProvider.
      when('/', {
        templateUrl: 'articles/index.html',
        controller: 'articlesIndexCtrl'
      }).
      when('/articles/new', {
        templateUrl: 'articles/new.html',
        controller: 'articlesNewCtrl'
      }).
      when('/articles/:id', {
        templateUrl: 'articles/show.html',
        controller: 'articlesShowCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
});