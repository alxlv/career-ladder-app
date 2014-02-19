define(function (require) {
  'use strict';

  return ['$rootScope', '$scope', 'jobs', function ($rootScope, $scope, jobs) {

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
    };

    $scope.onJobPointEnter = function(job) {
      $rootScope.$broadcast('jobPointEnter', job);
    };

    $scope.onJobPointLeave = function(job) {
      $rootScope.$broadcast('jobPointLeave', job);
    };
  }];
});
