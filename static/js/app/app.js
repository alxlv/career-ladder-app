define(function (require) {
  'use strict';

  var angular = require('angular');
  require('rangeSlider');
  require('uiRouter');
  require('controllers');
  require('services');
  require('components/jobs-flow/jobs-flow');
  require('components/job-point/job-point');

  return angular.module('ladderApp', [
    'ui-rangeSlider',
    'ui.router',
    'ladderApp.controllers',
    'ladderApp.services',
    'jobsFlow',
    'jobPoint'
  ]);
});
