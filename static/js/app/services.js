define(function (require) {
  'use strict';

  var angular = require('angular');

  var services = angular.module('ladderApp.services', []);

  services
    .value('version', '1.0.0')
    .factory('jobs',             require('services/jobs'));

  return services;

});