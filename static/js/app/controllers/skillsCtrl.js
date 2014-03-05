define(function (require) {
  'use strict';

  return ['$scope', function ($scope) {

    var onJobPointEnterHandler = $scope.$on('jobPointEnter', function(event, job) {
      $scope.job = job;
    });

    var onJobPointLeaveHandler = $scope.$on('jobPointLeave', function(event, job) {
      $scope.job = undefined;
    });

    $scope.$on('$destroy', function () {
      onJobPointEnterHandler();
      onJobPointLeaveHandler();
    });
  }];
});

