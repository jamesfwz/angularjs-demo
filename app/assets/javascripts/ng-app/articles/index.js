demoApp.controller('articlesIndexCtrl', function ($scope, $http) {
  $http.get('articles.json').success(function(data) {
    $scope.articles = data;
  });

  $scope.orderProp = 'created_at';
});