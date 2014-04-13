define(function (require) {
  'use strict';

  var angular  = require('angular');

  return angular.module('ladderApp.directives', [])

    .directive('exXlinkHref', function () {

      return {
        restrict: 'A',
        priority: 99,

        link: function (scope, element, attrs) {
          attrs.$observe('exXlinkHref', function (value) {
            if (!value) return;
            attrs.$set("xlink:href", value);
            attrs.$set("src", value);
          });
        }
      };
    })

    .directive('buttonCheck', function() {
      return {
        restrict: 'E',
        require: 'ngModel',
        link: function($scope, element, attr, ctrl) {

        // ignore other kind of button groups (e.g. buttons-radio)
        if (!element.parent('[data-toggle="buttons-checkbox"].btn-group-sm').length) {
          return;
        }

        // set/unset 'active' class when model changes
        $scope.$watch(attr.ngModel, function(newValue, oldValue) {
          element.toggleClass('active', ctrl.$viewValue);
        });

        // update model when button is clicked
        element.bind('click', function(e) {
          $scope.$apply(function(scope) {
            ctrl.$setViewValue(!ctrl.$viewValue);
          });

          // don't let Bootstrap.js catch this event,
          // as we are overriding its data-toggle behavior.
          e.stopPropagation();
        });
      }
    };
  });

});
