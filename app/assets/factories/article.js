var articleServices = angular.module('articleServices', ['ngResource']);

articleServices.factory('Articles', function($resource){
  return $resource('/articles.json', {},{
    query: { method: 'GET', isArray: true },
    create: { method: 'POST' }
  })
});

articleServices.factory('Article', function($resource){
  return $resource('/articles/:id.json', {}, {
    show: { method: 'GET' }
  });
});