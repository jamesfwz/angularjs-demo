articleApp.controller('articlesIndexCtrl', function ($scope, $http, Articles) {
  $scope.articles = Articles.query()
  $scope.orderProp = 'created_at';
});

articleApp.controller('articlesShowCtrl', function ($scope, $routeParams, $http, Article) {
  $scope.article = Article.show({id: $routeParams.id})
});

articleApp.controller("articlesNewCtrl", function($scope, $resource, Articles, $location) {
  $scope.article = {}

  $scope.save = function () {
    if ($scope.articleForm.$valid){
      Articles.create({article: $scope.article}, function(){
        $location.path('/');      
      }, function(error){
        console.log(error)
      });
    }
  }
});