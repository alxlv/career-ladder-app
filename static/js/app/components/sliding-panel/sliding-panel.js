define(function (require) {
  'use strict';

  var angular     = require('angular'),
    _             = require('underscore'),
    $             = require('jquery'),
    TweenMax      = require('tweenMax'),
    slidingPanelTpl  = require('text!components/sliding-panel/sliding-panel.html');


  return angular.module('slidingPanel', [])

    .directive('slidingPanel', function($timeout) {

      return {
        restrict: 'EA',
        scope: {
          headerData: '=',
          data: '='
        },
        template: slidingPanelTpl,

        link: function(scope, el, attrs) {

          function _slide() {
            $(".sliding-panel-flip").click(function(){
              $(".sliding-panel-wrapper").slideToggle("slow");
            });
            $(".sliding-panel-wrapper").slideDown("slow");
          }

          var initTimeout = $timeout(function () {
            $timeout(function () {
              // This code will run after
              // templateUrl has been loaded, cloned
              // and transformed by directives.
              // and properly rendered by the browser
              _slide();
            }, 0);
          }, 0);


          scope.$on('$destroy', function () {
            initTimeout();
          });
        }
      };
    });

});
