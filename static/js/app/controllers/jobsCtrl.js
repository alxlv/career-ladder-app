define(function (require) {
  'use strict';

  return ['$rootScope', '$scope', 'jobs', function ($rootScope, $scope, jobs) {
    var positionsFilterStates = undefined;
    var employmentTypesFilterStates = undefined;
    var workingTypesFilterStates = undefined;
    var datesFilterStates = undefined;

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
      jobs = _filterDates(jobs);
      jobs = _filterPositions(jobs);
      jobs = _filterEmploymentTypes(jobs);
      jobs = _filterWorkingTypes(jobs);

      return jobs;
    }

    function _filterDates(jobs) {
      if (typeof datesFilterStates === 'undefined') {
        return jobs;
      }

      // TODO: use _
      var result = [];
      var dateMin = datesFilterStates.value[0];
      var dateMax = datesFilterStates.value[1];
      for (var idx = 0; idx < _.size(jobs); idx++) {
        var dateFrom = jobs[idx].dateFrom.split('.')[1];
        var dateTo = jobs[idx].dateTo.split('.')[1];

        if (dateFrom >= dateMin && dateTo <= dateMax) {
          result.push(jobs[idx]);
        }
      }

      return result;
    }

    function _filterPositions(jobs) {
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

    function _filterEmploymentTypes(jobs) {
      if (typeof employmentTypesFilterStates === 'undefined') {
        return jobs;
      }

      // TODO: use _
      var result = [];
      for (var idx = 0; idx < _.size(jobs); idx++) {
        if (employmentTypesFilterStates.value[jobs[idx].employment_type] !== false) {
          result.push(jobs[idx]);
        }
      }

      return result;
    }

    function _filterWorkingTypes(jobs) {
      if (typeof workingTypesFilterStates === 'undefined') {
        return jobs;
      }

      // TODO: use _
      var result = [];
      for (var idx = 0; idx < _.size(jobs); idx++) {
        if (workingTypesFilterStates.value[jobs[idx].working_type] !== false) {
          result.push(jobs[idx]);
        }
      }

      return result;
    }

    $scope.findJobs = function(month, year) {
      var jobs = _findJobs(month, year);
      return _filterJobs(jobs);
    };

    var onDatesFilterChangedHandler = $scope.$on('datesFilterChanged', function(event, data) {
      datesFilterStates = data;
    });

    var onPositionsFilterChangedHandler = $scope.$on('positionsFilterChanged', function(event, data) {
      positionsFilterStates = data;
    });

    var onEmploymentTypesFilterChangedHandler = $scope.$on('employmentTypesFilterChanged', function(event, data) {
      employmentTypesFilterStates = data;
    });

    var onWorkingTypesFilterChangedHandler = $scope.$on('workingTypesFilterChanged', function(event, data) {
      workingTypesFilterStates = data;
    });

    $scope.onJobPointEnter = function(job) {
      $rootScope.$broadcast('jobPointEnter', job);
    };

    $scope.onJobPointLeave = function(job) {
      $rootScope.$broadcast('jobPointLeave', job);
    };

    $scope.$on('$destroy', function () {
      onDatesFilterChangedHandler();
      onPositionsFilterChangedHandler();
      onEmploymentTypesFilterChangedHandler();
      onWorkingTypesFilterChangedHandler();
    });
  }];
});
