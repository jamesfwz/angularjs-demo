articleApp.controller('articlesIndexCtrl', function ($scope, $http, Article) {
  $scope.articles = Article.query()
  $scope.orderProp = 'created_at';
});

articleApp.controller('articlesShowCtrl', function ($scope, $routeParams, $http, Article) {
  $scope.article = Article.get({id: $routeParams.id})
});