// console.log("Hello World");

// var myApp = angular.module("MyApp", []);

// var myRouter = angular.module("MyRouter", ["ngRoute"]);

// myRouter.config(['$routeProvider', function($routeProvider) {
//   $routeProvider.
//     when('/#/', {
//       templateUrl: 'assets/templates/home.html',
//       controller: 'MyCtrl'
//     }).
//     when('/#/about', {
//       templateUrl: 'assets/templates/about.html',
//       controller: 'MyCtrl'
//     }).
//     wen('/#/projects', {
//       templateUrl: 'assets/templates/projects.html',
//       controller: 'MyCtrl'
//     }).
//     otherwise({
//       redirectTo: '/'
//     });
// }]);

// myApp.controller("MyCtrl", ["$scope", "$location", function($scope, $location) {
//   $scope.go = function(path) {
//     $location.path(path);
//   };
//   $scope.test = "Hello World";
// }]);

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});