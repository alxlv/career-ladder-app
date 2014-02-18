define(function (require) {
  'use strict';

  var angular     = require('angular'),
    jobPointTpl   = require('text!components/job-point/job-point.html');

  return angular.module('jobPoint', [])

    .directive('jobPoint', [function () {

      return {
        restrict: 'EA',
        scope: {
          color: '=',
          dateLabel: '=',
          id: '='
        },
        template: jobPointTpl,

        link: function(scope, el, attrs) {

        }
      };
    }]);

});
