define(function (require) {
  'use strict';

  return ['$scope', 'jobs', function ($scope, jobs) {

    $scope.items = jobs.getAll();
    $scope.years = jobs.getYears();

    $scope.findJobs = function(month, year) {
      if (typeof month === 'undefined') {
        return false;
      }

      if (typeof year === 'undefined') {
        return false;
      }

      return jobs.findJobs(month, year);
    }
  }];
});
