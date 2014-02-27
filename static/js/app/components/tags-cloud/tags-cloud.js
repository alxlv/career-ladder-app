define(function (require) {
  'use strict';

  var angular     = require('angular'),
    _             = require('underscore'),
    $             = require('jquery'),
    tagsCloudTpl  = require('text!components/tags-cloud/tags-cloud.html');


  return angular.module('tagsCloud', [])

    .directive('tagsCloud', function($timeout) {

      return {
        restrict: 'EA',
        scope: {
          items: '='
        },
        template: tagsCloudTpl,

        link: function(scope, el, attrs) {

          function _init() {
            if (!$('#tags-cloud-canvas').tagcanvas({
              textColour: '#00f',
              //dragControl: true,
              //freezeActive: true,
              shape: 'vcylinder',
              hideTags: false,
              interval: 20,
              outlineColour: '#f96',
              outlineThickness: 5,
              reverse: true,
              depth: 0.8,
              minBrightness: 0.1,
              maxSpeed: 0.05,
              weight: true,
              //weightMode: "both",
              textHeight: 25,
              shadow: '#ccf',
              shadowBlur: 3,
              decel: 0.98,
              pulsateTime: 0.75,
              weightFrom: 'data-weight'
            }, 'tags')) {
              $('#tags-cloud-container').hide();
            }
          }

          var initTimeout = $timeout(function () {
            $timeout(function () {
              // This code will run after
              // templateUrl has been loaded, cloned
              // and transformed by directives.
              // and properly rendered by the browser
              _init();
            }, 0);
          }, 0);


          var reloadTimeout;
          scope.$watch('items', function(value) {
            if (typeof reloadTimeout !== 'undefined') {
              $timeout.cancel(reloadTimeout);
            }

            reloadTimeout = $timeout(function () {
              $('#tags-cloud-canvas').tagcanvas("reload");
            }, 0);
          });

          scope.$on('$destroy', function () {
            $timeout.cancel(initTimeout);
            $timeout.cancel(reloadTimeout);
          });
        }
      };
    });

});