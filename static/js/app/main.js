require.config({
  baseUrl: './static/js/app',
  paths: {
    angular:        '../../../bower_components/angular/angular',
    uiRouter:       '../../../bower_components/angular-ui-router/release/angular-ui-router',
    jquery:         '../../../bower_components/jquery/jquery',
    text:           '../../../bower_components/requirejs-text/text',
    underscore:     '../../../bower_components/underscore/underscore',
    timelineMax:    '../../../bower_components/greensock/src/uncompressed/TimelineMax',
    tweenMax:       '../../../bower_components/greensock/src/uncompressed/TweenMax'
  },
  shim: {
    'angular'          : { deps: ['jquery'], exports : 'angular' },
    'uiRouter'         : ['angular'],
    'jquery'           : { exports: '$' },
    'underscore'       : { exports: '_' },
    'tweenMax'         : { exports: 'TweenMax' },
    'timelineMax'      : {
      deps: ['tweenMax'],
      exports: 'TimelineMax'
    }
  }
});

// hey Angular, we're bootstrapping manually!
window.name = "NG_DEFER_BOOTSTRAP!";

define(function (require) {
  'use strict';

  var angular    = require('angular'),
      routes     = require('routes'),
      templates  = require('templates'),
      app        = require('app');

  var $html = angular.element(document.getElementsByTagName('html')[0]);

  angular.element().ready(function () {
    $html.addClass('ng-app');
    angular.bootstrap($html, [app['name']]);
  });

  // Allow cross-origin requests (only works for GET)
  app.config(['$httpProvider', function ($httpProvider) {        
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);

  app.run(['$rootScope', function ($rootScope) {
  }]);

});
