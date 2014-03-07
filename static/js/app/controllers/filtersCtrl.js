define(function (require) {
  'use strict';

  var _             = require('underscore');

  return ['$rootScope', '$scope', 'jobs', function ($rootScope, $scope, jobs) {

    $scope.positionsStates = {};
    _initPositions(true);
    function _initPositions(checked) {
      var positions = jobs.getPositions();
      $scope.positions = positions;

      for (var idx = 0; idx < _.size(positions); idx++) {
        $scope.positionsStates[positions[idx]] = checked;
      }
    }

    $scope.employmentTypesStates = {};
    _initEmploymentTypes(true);
    function _initEmploymentTypes(checked) {
      var employmentTypes = jobs.getEmploymentTypes();
      $scope.employment_types = employmentTypes;

      for (var idx = 0; idx < _.size(employmentTypes); idx++) {
        $scope.employmentTypesStates[employmentTypes[idx]] = checked;
      }
    }

    $scope.workingTypesStates = {};
    _initWorkingTypes(true);
    function _initWorkingTypes(checked) {
      var workingTypes = jobs.getWorkingTypes();
      $scope.working_types = workingTypes;

      for (var idx = 0; idx < _.size(workingTypes); idx++) {
        $scope.workingTypesStates[workingTypes[idx]] = checked;
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

    $scope.onPositionClick = function() {
      var eventData = {
        value: this.positionsStates
      };
      $rootScope.$broadcast('positionsFilterChanged', eventData);
    };

    $scope.onEmploymentTypeClick = function() {
      var eventData = {
        value: this.employmentTypesStates
      };
      $rootScope.$broadcast('employmentTypesFilterChanged', eventData);
    };

    $scope.onWorkingTypeClick = function() {
      var eventData = {
        value: this.workingTypesStates
      };
      $rootScope.$broadcast('workingTypesFilterChanged', eventData);
    };

    $scope.onValueBoxMouseEnter = function(e) {
      if ($('.filtersValuePanel').is(':visible')) {
        _hideFiltersValuePanel(e.currentTarget);
      }

      if (!$('.filtersValuePanel').is(':visible') && !this.$parent.frozen) {
        var position = $(e.currentTarget).position();
        var boundingRect = e.currentTarget.getBoundingClientRect();
        var filtersValuePanelWidth = $('.filtersValuePanel').width();
        $('.filtersValuePanel').css({'top' : position.top, 'left' : boundingRect.right - filtersValuePanelWidth, 'position':'absolute'});
        $('.filtersValuePanel').data('currentTargetId', e.currentTarget.id);
        $('.filtersValuePanel').show();
      }
    };

    function _hideFiltersValuePanel(toElement) {
      if (toElement !== 'undefined') {
        if (toElement !== null && toElement.tagName !== null) {
          if (toElement.tagName === 'SPAN' && toElement.id === $('.filtersValuePanel').data('currentTargetId')) return;
        }

        if (typeof($(toElement).attr('class')) !== 'undefined' && $(toElement).attr('class').indexOf('filtersValuePanel') !== -1) return;

        $('.filtersValuePanel').hide();
        $('.filtersValuePanel').removeData('currentTargetId');
      }
    }

    $scope.onValueBoxMouseLeave = function(e) {
      var toElement = e.toElement || e.currentTarget;
      _hideFiltersValuePanel(toElement);
    };

    $scope.select = function(e, checked) {
      var currentTargetId = $('.filtersValuePanel').data('currentTargetId');
      if (typeof currentTargetId !== 'undefined') {
        var eventData = {};

        if (currentTargetId === 'positions') {
          _initPositions(checked);
          eventData.value = this.positionsStates;
        } else if (currentTargetId === 'workingTypes') {
          _initWorkingTypes(checked);
          eventData.value = this.workingTypesStates;
        } else if (currentTargetId === 'employmentTypes') {
          _initEmploymentTypes(checked);
          eventData.value = this.employmentTypesStates;
        } else {
          return;
        }

        $rootScope.$broadcast(currentTargetId + 'FilterChanged', eventData);
      }
    };

    $scope.getEmploymentTypeIcon = function(et) {
      if (et === 'certification' || et === 'education' || et === 'startup') {
        return "media/" + et + ".png";
      }
      return "media/work.png";
    };

  }];
});
