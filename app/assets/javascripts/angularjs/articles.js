var demoApp = angular.module('demoApp', []);

demoApp.controller('ArticlesIndexCtrl', function ($scope) {
  $scope.articles = [
    {
      'title': 'Nexus S',
      'content': 'Fast just got faster with Nexus S.',
      'created_at': '2015-06-07'
    },
    {
      'title': 'Motorola XOOM™ with Wi-Fi',
      'content': 'The Next, Next Generation tablet.',
      'created_at': '2011-08-02'
    },
    {
      'title': 'Motorola XOOM™ with Wi-Fi',
      'content': 'The Next, Next Generation tablet.',
      'created_at': '2016-07-04'
    },
    {
      'title': 'MOTOROLA XOOM™',
      'content': 'The Next, Next Generation tablet.',
      'created_at': '2013-01-11'
    }
  ];

  $scope.orderProp = 'created_at';
});