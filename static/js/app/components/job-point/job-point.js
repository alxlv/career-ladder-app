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
          type: '=',
          id: '=',
          isStart: '='
        },
        template: jobPointTpl,

        link: function(scope, el, attrs) {
          scope.getY = function() {
            if (this.color === 'green') {
              return 30;
            }

            return 30;
          }
        }
      };
    }]);

});
