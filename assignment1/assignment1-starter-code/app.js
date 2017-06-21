(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchController);

  LunchController.$inject = ['$scope'];
  function LunchController ($scope) {
    $scope.lunchList = "";
    $scope.checkLunch = function() {
      var lunchItems = $scope.lunchList.split(',');
      // Remove empty items from the lunchList
      lunchItems = lunchItems.filter(function(n) { return n.length>0; });
      if ($scope.lunchList.length == 0) {
        $scope.lunchMessage = "Please enter data first"
      } else if (lunchItems.length <= 3) {
        $scope.lunchMessage = "Enjoy!";
      } else {
        $scope.lunchMessage = "Too much!";
      }
    };
  };

})();
