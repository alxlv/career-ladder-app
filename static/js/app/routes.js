define(function (require) {
  'use strict';

  var angular    = require('angular'),
      app        = require('app'),
      templates  = require('templates');


  return app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/'
      })

	}]);

});
