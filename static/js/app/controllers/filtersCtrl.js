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

    $scope.employment_types = jobs.getEmploymentTypes();
    $scope.working_types = jobs.getWorkingTypes();

    var years = jobs.getMinMaxYears();
    $scope.years = {
      min: years[0],
      max: years[1],
      rangeMin: years[0],
      rangeMax: years[1]
    };

    $scope.positionChecked = true;

    $scope.onPositionClick = function(position) {
      positionsStates[position] = this.positionChecked;
      var eventData = {
        value: positionsStates
      };
      console.log(positionsStates);
      $rootScope.$broadcast('filterChanged', eventData);
    };

  }];
});
