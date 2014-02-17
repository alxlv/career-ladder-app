define(function (require) {
  'use strict';

  return ['$scope', 'jobs', function ($scope, jobs) {

    $scope.items = jobs.getAll();
    $scope.years = jobs.getYears();

  }];
});
