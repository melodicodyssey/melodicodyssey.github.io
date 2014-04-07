console.log("Hello World");

var myApp = angular.module("MyApp", []);

var myRouter = angular.module("MyRouter", ["ngRoute"]);

myRouter.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/#/', {
      templateUrl: 'assets/templates/home.html',
      controller: 'MyCtrl'
    }).
    when('/#/about', {
      templateUrl: 'assets/templates/about.html',
      controller: 'MyCtrl'
    }).
    wen('/#/projects', {
      templateUrl: 'assets/templates/projects.html',
      controller: 'MyCtrl'
    }).
    otherwise({
      redirectTo: '/'
    })
}]);

myApp.controller("MyCtrl", ["$scope", "$location", function($scope, $location) {
  $scope.go = function(path) {
    $location.path(path);
  }
  $scope.test = "Hello World";
}])

