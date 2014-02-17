define(function (require) {
  'use strict';

  var angular = require('angular');
  require('controllers');
  require('services');
  require('components/jobs-flow/jobs-flow');
  require('components/job-point/job-point');

  return angular.module('paymentsApp', [
    'ladderApp.controllers',
    'ladderApp.services',
    'jobsFlow',
    'jobPoint'
  ]);
});
