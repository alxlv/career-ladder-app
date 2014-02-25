define(function (require) {
  'use strict';

  var _             = require('underscore');

  return ['$rootScope', '$scope', 'jobs', function ($rootScope, $scope, jobs) {
    var positionsStates = {};
    _initPositions();
    function _initPositions() {
      var positions = jobs.getPositions();
      $scope.positions = positions;

      for (var idx = 0; idx < _.size(positions); idx++) {
        positionsStates[positions[idx]] = true;
      }
    }

    var employmentTypesStates = {};
    _initEmploymentTypes();
    function _initEmploymentTypes() {
      var employmentTypes = jobs.getEmploymentTypes();
      $scope.employment_types = employmentTypes;

      for (var idx = 0; idx < _.size(employmentTypes); idx++) {
        employmentTypesStates[employmentTypes[idx]] = true;
      }
    }

    var workingTypesStates = {};
    _initWorkingTypes();
    function _initWorkingTypes() {
      var workingTypes = jobs.getWorkingTypes();
      $scope.working_types = workingTypes;

      for (var idx = 0; idx < _.size(workingTypes); idx++) {
        workingTypesStates[workingTypes[idx]] = true;
      }
    }

    var years = jobs.getMinMaxYears();
    $scope.years = {
      min: years[0],
      max: years[1],
      rangeMin: years[0],
      rangeMax: years[1]
    };

    function _sendMinMaxDatesEvent() {
      if ($scope.years.min !== undefined && $scope.years.max !== undefined) {
        var eventData = {
          value: [$scope.years.min, $scope.years.max]
        };
        $rootScope.$broadcast('datesFilterChanged', eventData);
      }
    }

    $scope.$watch('years.min', _sendMinMaxDatesEvent);
    $scope.$watch('years.max', _sendMinMaxDatesEvent);

    $scope.positionChecked = true;

    $scope.onPositionClick = function(position) {
      positionsStates[position] = this.positionChecked;
      var eventData = {
        value: positionsStates
      };
      $rootScope.$broadcast('positionsFilterChanged', eventData);
    };

    $scope.employmentTypeChecked = true;

    $scope.onEmploymentTypeClick = function(empType) {
      employmentTypesStates[empType] = this.employmentTypeChecked;
      var eventData = {
        value: employmentTypesStates
      };
      $rootScope.$broadcast('employmentTypesFilterChanged', eventData);
    };

    $scope.workingTypeChecked = true;

    $scope.onWorkingTypeClick = function(workingType) {
      workingTypesStates[workingType] = this.workingTypeChecked;
      var eventData = {
        value: workingTypesStates
      };
      $rootScope.$broadcast('workingTypesFilterChanged', eventData);
    };

  }];
});
