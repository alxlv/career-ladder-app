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
      var element = e.toElement || e.currentTarget;
      if (typeof element !== 'undefined') {
        var enlarge = true;
        if (typeof element._gsTransform !== 'undefined') {
          if (element._gsTransform.scaleX > 1) {
            TweenMax.to(element, 0,  {css:{ className: 'inactive' }});
            $(element).attr('title', 'Click to enlarge');
            TweenMax.to(element, 0.2, { scale: 1, ease: "easeOut", transformOrigin: 'center center' });
            enlarge = false;
          }
        }

        if (enlarge) {
          TweenMax.to(element, 0,  {css:{ className: 'active' }});
          $(element).attr('title', 'Click to minimise');
          TweenMax.to(element, 0.2, { scale: 8, ease: "easeOut", transformOrigin: 'center center' });
        }
      }
    };

    $scope.$on('$destroy', function () {
      onJobPointEnterHandler();
      onJobPointLeaveHandler();
    });
  }];
});

