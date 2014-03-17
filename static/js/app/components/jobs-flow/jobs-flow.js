define(function (require) {
  'use strict';

  var angular     = require('angular'),
    _             = require('underscore'),
    $             = require('jquery'),
    TweenMax      = require('tweenMax'),
    jobsFlowTpl   = require('text!components/jobs-flow/jobs-flow.html');


  return angular.module('jobsFlow', [])

    .directive('jobsFlow', function() {

      return {
        restrict: 'EA',
        scope: {
          items: '=',
          years: '=',
          findJobsCtrl: '&',
          onJobPointEnterCtrl: '&',
          onJobPointLeaveCtrl: '&',
          onJobPointClickCtrl: '&'
        },
        template: jobsFlowTpl,

        link: function(scope, el, attrs) {
          var zeroDuration = 0;
          var lastClickedJob;
          var paramsScale1 = { scale: 1, ease: "easeOut", transformOrigin: 'top left' };
          var paramsScale15 = { scale: 1.8, ease: "easeOut", transformOrigin: 'top left' };
          var isClicked = false;
          var connector = $('.job-point-connector-inactive');

          function hideConnector() {
            TweenMax.set(connector, {css:{className: 'job-point-connector-inactive'}});
          }

          function setTitleText() {
            var newTitleText = isClicked ? 'lock' : "unlock"
            var jobPoints = el.find('job-point').children().find('g');
            for (var idx = 0; idx < _.size(jobPoints); idx++) {
              var jobPoint = $(jobPoints[idx]);
              var titleObj = jobPoint.children('title')[0];
              $(titleObj).text("Click to " + newTitleText);
            }
          }

          function scaleOffAllJobPoints() {
            var jobPoints = el.find('job-point').children().find('g');
            for (var idx = 0; idx < _.size(jobPoints); idx++) {
              var jobPoint = $(jobPoints[idx]);
              TweenMax.to(jobPoint, 0.2, paramsScale1);
              TweenMax.to(jobPoint, zeroDuration, {css:{ cursor: 'arrow' }});
              var text = jobPoint.children('text')[0];
              TweenMax.to(text, zeroDuration, {css:{ display: 'none', cursor: 'arrow' }});
            }

            //hideConnector();
          }

          function scaleJobPoints(job, isScaled) {
            var jobPoints = el.find('job-point').children().find('g');
            var textObjs = [];
            var jobPointsObjs = [];
            for (var idx = 0; idx < _.size(jobPoints) && textObjs.length < 2; idx++) {
              if (job.id.toString() === $(jobPoints[idx]).attr('id')) {
                var jobPoint = $(jobPoints[idx]);
                jobPointsObjs.push(jobPoints[idx]);
                var text = jobPoint.children('text')[0];
                textObjs.push(text);
                TweenMax.to(jobPoint, 0.2, isScaled ? paramsScale15 : paramsScale1);
                TweenMax.to(jobPoint, zeroDuration, {css:{ cursor: isScaled ? 'pointer' : 'arrow' }});
                TweenMax.to(text, zeroDuration, {css:{ display: isScaled ? 'inline' : 'none', cursor: isScaled ? 'pointer' : 'arrow' }});
              }
            }

            if (textObjs.length > 1) {
              var rect0 = textObjs[0].getBoundingClientRect();
              var width = rect0.width;
              var leftX0 = $(textObjs[0]).offset().left;
              var leftX1 = $(textObjs[1]).offset().left;
              if (leftX0 !== 0 && leftX1 !== 0) {
                var diff = width + leftX0 - leftX1;
                var wrap = false;
                if (diff >= -30 && diff <= 30) {
                  TweenMax.set(textObjs[1], {css:{transform:"translateY(10px)"}});
                  wrap = true;
                }

                if (wrap === false && jobPointsObjs.length > 1) {
                  rect0 = jobPointsObjs[0].getBoundingClientRect();
                  width = rect0.width;
                  var leftY0 = $(jobPointsObjs[0]).offset().top;
                  // TODO: HACK! (detect browser features)
                  if (leftY0 < 500) {
                    leftY0 = leftY0 + rect0.height / 2;
                  }
                  leftX0 = $(jobPointsObjs[0]).offset().left;
                  leftX1 = $(jobPointsObjs[1]).offset().left;
                  //TweenMax.set(connector, {css:{top: leftY0, left: leftX0 + width / 2, width: leftX1 - leftX0, className: 'job-point-connector-active'}});
                }
              }
            }
          }

          scope.findJobs = function(month, year) {
            return scope.findJobsCtrl({ month: month, year: year });
          }

          scope.getEmploymentType = function(job) {
            if (job.employment_type === 'certification' || job.employment_type === 'education' || job.employment_type === 'startup') {
              return 'media/' + job.employment_type + '.png';
            }

            return 'media/work.png';
          }

          scope.getJobColor = function(job, month, year) {
            var isStartPoint = scope.isStartPoint(job, month, year);
            if (isStartPoint) {
              return 'green';
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

          scope.onJobPointClick = function(job, e) {
            if (typeof e.toElement !== 'undefined') {
              if ($(e.toElement).attr('class') !== 'job-point-image') {
                return;
              }
            }

            if (!isClicked) {
              lastClickedJob = job;
            } else {
              if (typeof lastClickedJob !== 'undefined') {
                scaleJobPoints(lastClickedJob, false);
              }
            }

            setTitleText();

            isClicked = !isClicked;
            scope.onJobPointClickCtrl({ clicked: isClicked });
          }

          scope.onJobPointEnter = function(job, e) {
            if (typeof e.toElement !== 'undefined') {
              var className = $(e.toElement).attr('class');
              if (className !== 'job-point' && className !== 'job-point-image' && typeof className != 'undefined') return;
            }
            if (isClicked) return;
            scaleOffAllJobPoints();
            scaleJobPoints(job, true);
            scope.onJobPointEnterCtrl({ job: job });
          }

          scope.onJobPointLeave = function(job, e) {
            if (typeof e.toElement !== 'undefined') {
              var className = $(e.toElement).attr('class');
              if (className !== 'job-point' && className !== 'job-point-image' && typeof className != 'undefined') return;
            }

            if (isClicked) return;
            scaleJobPoints(job, false);
            hideConnector();
            scope.onJobPointLeaveCtrl({ job: job });
          }

          scope.isStartPoint = function(job,  month, year) {
            var from = ("0" + month).slice(-2) + "." + year;
            if (job.dateFrom === from) {
              return true;
            }

            return false;
          }

          scope.$on('$destroy', function () {
          });
        }
      };
    });

});
