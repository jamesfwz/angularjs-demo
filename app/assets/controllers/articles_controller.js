demoApp.controller('articlesIndexCtrl', function ($scope, $http) {
  $http.get('articles.json').success(function(data) {
    $scope.articles = data;
  });
  $scope.orderProp = 'created_at';
});

demoApp.controller('articlesShowCtrl', function ($scope, $routeParams, $http) {
  $http.get('articles/' + $routeParams.article_id + '.json').success(function(data) {
    $scope.article = data;
  });
});