(function() {
  'use strict';
angular.module('myFirstApp', [])
.controller('myFirstController', function ($scope) {
  $scope.name = "chris";
  $scope.sayHello = function() {
    return "Hello Coursera";
  }
});
})();
