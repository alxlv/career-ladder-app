define(function (require) {
  'use strict';

  return ['$scope', function ($scope) {

    var resumes = [
      { text: 'PDF', link: 'www' },
      { text: 'DOCX', link: 'www' }
    ];

    $scope.resumes = resumes;

  }];
});