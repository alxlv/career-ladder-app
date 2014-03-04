define(function (require) {
  'use strict';

  var angular = require('angular');
  require('rangeSlider');
  require('uiRouter');
  require('directives');
  require('controllers');
  require('services');
  require('components/jobs-flow/jobs-flow');
  require('components/job-point/job-point');
  require('components/tags-cloud/tags-cloud');
  require('components/sliding-panel/sliding-panel');

  return angular.module('ladderApp', [
    'ui-rangeSlider',
    'ui.router',
    'ladderApp.directives',
    'ladderApp.controllers',
    'ladderApp.services',
    'jobsFlow',
    'jobPoint',
    'tagsCloud',
    'slidingPanel']).config(['$compileProvider', function ($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|skype):/);
    }]);
});
