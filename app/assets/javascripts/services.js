var articleServices = angular.module('articleServices', ['ngResource']);

articleServices.factory('Article', function($resource){
  return $resource('articles/:id.json', {}, {
    query: {method:'GET', params:{ id: '' }, isArray:true}
  });
});