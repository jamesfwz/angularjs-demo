articleApp.controller('articlesIndexCtrl', function ($scope, $http, Articles) {
  $scope.articles = Articles.query()
  $scope.orderProp = 'created_at';
});

articleApp.controller('articlesShowCtrl', function ($scope, $routeParams, $http, Article) {
  $scope.article = Article.show({id: $routeParams.id})
});

articleApp.controller("articlesNewCtrl", function($scope, $resource, Upload, $location) {
  $scope.article = {}

  $scope.save = function () {
    if ($scope.articleForm.$valid){
      Upload.upload({
        url: 'articles.json',
        data: {article: $scope.article}
      }).then(function (resp) {
        $location.path('/');      
      }, function (resp) {
        console.log('Error status: ' + resp.status);
      });
    }
  }
});