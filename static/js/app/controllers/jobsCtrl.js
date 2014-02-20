define(function (require) {
  'use strict';

  return ['$rootScope', '$scope', 'jobs', function ($rootScope, $scope, jobs) {
    var positionsFilterStates = undefined;

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

    function _filterJobs(jobs) {
      if (typeof positionsFilterStates === 'undefined') {
        return jobs;
      }

      // TODO: use _
      var result = [];
      for (var idx = 0; idx < _.size(jobs); idx++) {
        var unchecked = 0;
        var positionsCnt = _.size(jobs[idx].position);
        for (var posIdx = 0; posIdx < positionsCnt; posIdx++) {
          if (positionsFilterStates.value[jobs[idx].position[posIdx]] === false) {
            unchecked++;
          }
        }

        if (unchecked !== positionsCnt) {
          result.push(jobs[idx]);
        }
      }

      return result;
    }

    $scope.findJobs = function(month, year) {
      var jobs = _findJobs(month, year);
      return _filterJobs(jobs);
    };

    $scope.$on('filterChanged', function(event, data) {
      positionsFilterStates = data;
    });

    $scope.onJobPointEnter = function(job) {
      $rootScope.$broadcast('jobPointEnter', job);
    };

    $scope.onJobPointLeave = function(job) {
      $rootScope.$broadcast('jobPointLeave', job);
    };
  }];
});
