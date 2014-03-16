define(function (require) {
  'use strict';

  var $             = require('jquery'),
      TweenMax      = require('tweenMax');

  return ['$scope', function ($scope) {

    var onJobPointEnterHandler = $scope.$on('jobPointEnter', function(event, job) {
      $scope.job = job;
    });

    var onJobPointLeaveHandler = $scope.$on('jobPointLeave', function(event, job) {
      $scope.job = undefined;
    });

    $scope.showScreenshot = function(e) {
      if (typeof e.toElement !== 'undefined') {
        var enlarge = true;
        if (typeof e.toElement._gsTransform !== 'undefined') {
          if (e.toElement._gsTransform.scaleX > 1) {
            TweenMax.to(e.toElement, 0,  {css:{ className: 'inactive' }});
            $(e.toElement).attr('title', 'Click to enlarge');
            TweenMax.to(e.toElement, 0.2, { scale: 1, ease: "easeOut", transformOrigin: 'center center' });
            enlarge = false;
          }
        }

        if (enlarge) {
          TweenMax.to(e.toElement, 0,  {css:{ className: 'active' }});
          $(e.toElement).attr('title', 'Click to minimise');
          TweenMax.to(e.toElement, 0.2, { scale: 7, ease: "easeOut", transformOrigin: 'center center' });
        }
      }
    };

    $scope.$on('$destroy', function () {
      onJobPointEnterHandler();
      onJobPointLeaveHandler();
    });
  }];
});

