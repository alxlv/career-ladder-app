define(function (require) {
  'use strict';

  return ['$scope', function ($scope) {

    var resumes = [
      { text: 'PDF', link: 'www', image_src: 'media/pdf.png' },
      { text: 'DOCX', link: 'www', image_src: 'media/word_docx.png' }
    ];

    $scope.resumes = resumes;

  }];
});