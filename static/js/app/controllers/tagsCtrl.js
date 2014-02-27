define(function (require) {
  'use strict';

  return ['$rootScope', '$scope', 'jobs', function ($rootScope, $scope, jobs) {
    var allTagsWithWeights = jobs.getAllTags();
    $scope.items = allTagsWithWeights;

    function _filterTags() {
      var filteredJobs = $scope.filterJobs(jobs.getAll());
      $scope.items = jobs.getTagsForJobs(filteredJobs);
    }

    $scope.$watch('datesFilterStates', function (value) {
      if (typeof value !== 'undefined') {
        _filterTags();
      }
    });

    $scope.$watch('positionsFilterStates', function (value) {
      if (typeof value !== 'undefined') {
        _filterTags();
      }
    });

    $scope.$watch('employmentTypesFilterStates', function (value) {
      if (typeof value !== 'undefined') {
        _filterTags();
      }
    });

    $scope.$watch('workingTypesFilterStates', function (value) {
      if (typeof value !== 'undefined') {
        _filterTags();
      }
    });
  }];
});
