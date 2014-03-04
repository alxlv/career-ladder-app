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
          var hidden = false;

          function _slide() {
            $(".control-button-image").click(function() {
              var controlImage = $(".control-button-image");
              $(".sliding-panel-wrapper").slideToggle("slow");
              TweenMax.to(controlImage, 0.1, { rotation: hidden ? 0 : 180, ease: "easeOut", onComplete: function(el, title) {
                $(el).attr('title', title);
                hidden = !hidden;
              }, onCompleteParams: [controlImage, hidden ? 'Click to hide' : 'Click to show'] });
            });

            $(".sliding-panel-wrapper").slideDown("slow");
            hidden = false;
          }

          scope.getControlButtonImage = function() {
            if (hidden) {
              return "media/open.png";
            }

            return "media/close.png";
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
