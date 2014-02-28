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
          });
        }
      };
    });

});
