define(function (require) {
  'use strict';

  return ['$rootScope', '$scope', 'jobs', function ($rootScope, $scope, jobs) {
    $scope.items = jobs.getTags();
  }];
});
