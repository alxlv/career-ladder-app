define(function (require) {
  'use strict';

  var _             = require('underscore');

  return ['$rootScope', '$scope', 'jobs', function ($rootScope, $scope, jobs) {

    $scope.items = jobs.getAll();
    $scope.years = jobs.getYears();

    function _findJobs(month, year) {
      if (typeof month === 'undefined') {
        return false;
      }

      if (typeof year === 'undefined') {
        return false;
      }

      var to = ("0" + month).slice(-2) + "." + year;
      var from = to;
      var jobs = _.where($scope.items, { dateTo: to });
      if (_.size(jobs) === 0) {
        jobs = _.where($scope.items, { dateFrom: from });
      }

      return jobs;
    }

    $scope.findJobs = function(month, year) {
      var jobs = _findJobs(month, year);
      return $scope.filterJobs(jobs);
    };

    $scope.onJobPointClick = function(clicked) {
      this.$parent.frozen = clicked;
    };

    $scope.onJobPointEnter = function(job) {
      $rootScope.$broadcast('jobPointEnter', job);
    };

    $scope.onJobPointLeave = function(job) {
      $rootScope.$broadcast('jobPointLeave', job);
    };
  }];
});
