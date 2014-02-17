define(function (require) {
  'use strict';

  var angular     = require('angular'),
    jobsFlowTpl   = require('text!components/jobs-flow/jobs-flow.html');


  return angular.module('jobsFlow', [])

    .directive('jobsFlow', [function () {

      return {
        restrict: 'EA',
        scope: {
          items: '=',
          years: '='
        },
        template: jobsFlowTpl,

        link: function(scope, el, attrs) {

        }
      };
    }]);

});
