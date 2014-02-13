define(function (require) {
  'use strict';

  var angular = require('angular');
  require('controllers');

  return angular.module('paymentsApp', [
    'ladderApp.controllers'
  ]);
});
