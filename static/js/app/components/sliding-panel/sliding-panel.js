define(function (require) {
  'use strict';

  var angular     = require('angular'),
    $             = require('jquery'),
    TweenMax      = require('tweenMax'),
    slidingPanelTpl  = require('text!components/sliding-panel/sliding-panel.html');


  return angular.module('slidingPanel', [])

    .directive('slidingPanel', function($timeout) {

      return {
        restrict: 'EA',
        scope: {
          header: '=',
          positions: '=',
          comments: '=',
          contacts: '='
        },
        template: slidingPanelTpl,

        link: function(scope, el, attrs) {
          scope.hidden = false;

          function _click() {
            $(".sliding-panel-wrapper").slideToggle("slow");
            scope.hidden = !scope.hidden;
            scope.$apply();
            $(".control-button-image").click(_click);

            var controlImage = $(".control-button-image");
            TweenMax.to(controlImage, 0.07, { rotation: scope.hidden ? 180 : 360, ease: "easeOut", onComplete: function() {
            }, onCompleteParams: [controlImage] });
          }

          function _slide() {
            $(".control-button-image").click(_click);
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
            $timeout.cancel(initTimeout);
          });
        }
      };
    });

});
