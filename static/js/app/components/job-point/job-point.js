define(function (require) {
  'use strict';

  var angular     = require('angular'),
    jobPointTpl   = require('text!components/job-point/job-point.html');


  return angular.module('jobPoint', [])

    .directive('jobPoint', [function () {

      return {
        restrict: 'EA',
        scope: { },
        template: jobPointTpl,

        link: function(scope, el, attrs) {

        }
      };
    }]);

});
