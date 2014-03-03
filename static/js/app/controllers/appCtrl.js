define(function (require) {
  'use strict';

  return ['$scope', function ($scope) {
    $scope.positionsFilterStates = undefined;
    $scope.employmentTypesFilterStates = undefined;
    $scope.workingTypesFilterStates = undefined;
    $scope.datesFilterStates = undefined;

    $scope.frozen = false;

    var onDatesFilterChangedHandler = $scope.$on('datesFilterChanged', function(event, data) {
      $scope.datesFilterStates = data;
    });

    var onPositionsFilterChangedHandler = $scope.$on('positionsFilterChanged', function(event, data) {
      $scope.positionsFilterStates = data;
    });

    var onEmploymentTypesFilterChangedHandler = $scope.$on('employmentTypesFilterChanged', function(event, data) {
      $scope.employmentTypesFilterStates = data;
    });

    var onWorkingTypesFilterChangedHandler = $scope.$on('workingTypesFilterChanged', function(event, data) {
      $scope.workingTypesFilterStates = data;
    });

    $scope.filterJobs = function(jobs) {
      jobs = _filterDates(jobs);
      jobs = _filterPositions(jobs);
      jobs = _filterEmploymentTypes(jobs);
      jobs = _filterWorkingTypes(jobs);

      return jobs;
    }

    function _filterDates(jobs) {
      if (typeof $scope.datesFilterStates === 'undefined') {
        return jobs;
      }

      // TODO: use _
      var result = [];
      var dateMin = $scope.datesFilterStates.value[0];
      var dateMax = $scope.datesFilterStates.value[1];
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
      if (typeof $scope.positionsFilterStates === 'undefined') {
        return jobs;
      }

      // TODO: use _
      var result = [];
      for (var idx = 0; idx < _.size(jobs); idx++) {
        var unchecked = 0;
        var positionsCnt = _.size(jobs[idx].position);
        for (var posIdx = 0; posIdx < positionsCnt; posIdx++) {
          if ($scope.positionsFilterStates.value[jobs[idx].position[posIdx]] === false) {
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
      if (typeof $scope.employmentTypesFilterStates === 'undefined') {
        return jobs;
      }

      // TODO: use _
      var result = [];
      for (var idx = 0; idx < _.size(jobs); idx++) {
        if ($scope.employmentTypesFilterStates.value[jobs[idx].employment_type] !== false) {
          result.push(jobs[idx]);
        }
      }

      return result;
    }

    function _filterWorkingTypes(jobs) {
      if (typeof $scope.workingTypesFilterStates === 'undefined') {
        return jobs;
      }

      // TODO: use _
      var result = [];
      for (var idx = 0; idx < _.size(jobs); idx++) {
        if ($scope.workingTypesFilterStates.value[jobs[idx].working_type] !== false) {
          result.push(jobs[idx]);
        }
      }

      return result;
    }

    $scope.$on('$destroy', function () {
      onDatesFilterChangedHandler();
      onPositionsFilterChangedHandler();
      onEmploymentTypesFilterChangedHandler();
      onWorkingTypesFilterChangedHandler();
    });
  }];
});
