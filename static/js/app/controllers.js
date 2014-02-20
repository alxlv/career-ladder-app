define(function (require) {
  'use strict';

  var angular = require('angular');

  return angular.module('ladderApp.controllers', [])
    .controller('AppCtrl', require('controllers/appCtrl'))
    .controller('JobsCtrl', require('controllers/jobsCtrl'))
    .controller('SkillsCtrl', require('controllers/skillsCtrl'))
    .controller('FiltersCtrl', require('controllers/filtersCtrl'));
});
