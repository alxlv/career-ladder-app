define(function (require) {
  'use strict';

  var angular     = require('angular'),
    _             = require('underscore'),
    $             = require('jquery'),
    TweenMax      = require('tweenMax'),
    jobsFlowTpl   = require('text!components/jobs-flow/jobs-flow.html');


  return angular.module('jobsFlow', [])

    .directive('jobsFlow', function($timeout) {

      return {
        restrict: 'EA',
        scope: {
          items: '=',
          years: '=',
          findJobsCtrl: '&'
        },
        template: jobsFlowTpl,

        link: function(scope, el, attrs) {
          var jobPoints = [];
          var zeroDuration = 0;
          var paramsScale1 = { scale: 1, ease: "easeOut", transformOrigin: 'top left' };
          var paramsScale15 = { scale: 1.5, ease: "easeOut", transformOrigin: 'top left' };

          function scaleJobPoints(job, isScaled) {
            for (var idx = 0; idx < _.size(jobPoints); idx++) {
              if (job.id.toString() === $(jobPoints[idx]).attr('id')) {
                var jobPoint = $(jobPoints[idx]);
                TweenMax.to(jobPoint, 0.2, isScaled ? paramsScale15 : paramsScale1);
                var text = jobPoint.children('text')[0];
                TweenMax.to(text, zeroDuration, {css:{ display: isScaled ? 'inline' : 'none' }});
              }
            }
          }

          scope.findJobs = function(month, year) {
            return scope.findJobsCtrl({ month: month, year: year });
          }

          scope.getJobColor = function(job, month, year) {
            var from = ("0" + month).slice(-2) + "." + year;
            if (job.dateFrom === from) {
              return '#07F3FE';
            }

            return 'red';
          }

          scope.getJobText = function(job, month, year) {
            var from = ("0" + month).slice(-2) + "." + year;
            if (job.dateFrom === from) {
              return from;
            }

            return job.dateTo;
          }

          scope.onJobPointClick = function(job) {
            //console.log(job);
          }

          scope.onJobPointEnter = function(job) {
            scaleJobPoints(job, true);
          }

          scope.onJobPointLeave = function(job) {
            scaleJobPoints(job, false);
          }

          // http://lorenzmerdian.blogspot.ru/2013/03/how-to-handle-dom-updates-in-angularjs.html
          var initTimeout = $timeout(function () {
            $timeout(function () {
              // This code will run after
              // templateUrl has been loaded, cloned
              // and transformed by directives.
              // and properly rendered by the browser
              jobPoints = el.find('job-point').children().find('g');
              //console.log(jobPoints);
            }, 0);
          }, 0);

          scope.$on('$destroy', function () {
            if (initTimeout) {
              $timeout.cancel(initTimeout);
            }
          });
        }
      };
    });

});
