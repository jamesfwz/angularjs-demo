var demoApp = angular.module('demoApp', []);

demoApp.controller('ArticlesIndexCtrl', function ($scope) {
  $scope.articles = [
    {'title': 'Nexus S',
     'content': 'Fast just got faster with Nexus S.'},
    {'title': 'Motorola XOOM™ with Wi-Fi',
     'content': 'The Next, Next Generation tablet.'},
    {'title': 'MOTOROLA XOOM™',
     'content': 'The Next, Next Generation tablet.'}
  ];
});