define(function (require) {
  'use strict';

  return ['$scope', function ($scope) {

    var resumes = [
      { text: 'PDF', link: 'www', image_src: 'media/pdf.png' },
      { text: 'DOCX', link: 'www', image_src: 'media/word_docx.png' }
    ];

    $scope.resumes = resumes;

    var social_media = [
      { text: 'Alex Levshin in LinkedIn', link: 'http://ru.linkedin.com/pub/alex-levshin/4a/597/29a', image_src: 'media/linkedin_32.png' },
      { text: 'Alex Levshin in Facebook', link: 'http://www.facebook.com/alexander.levshin.56', image_src: 'media/facebook_32.png' },
      { text: 'Alex Levshin in GitHub', link: 'https://github.com/AlexWell', image_src: 'media/github_32.png' }
    ];

    $scope.social_media = social_media;

    var jsComponents = [
      { text: 'AngularJS v1.2.14', link: 'http://angularjs.org' },
      { text: 'Underscore.js v1.5.2', link: 'http://underscorejs.org' },
      { text: 'RequireJS v2.1.11', link: 'http://github.com/jrburke/requirejs' },
      { text: 'jQuery v2.1.0', link: 'http://jquery.com' },
      { text: 'GreenSock-JS v1.11.4', link: 'http://www.greensock.com' },
      { text: 'jQuery.tagcanvas v2.2', link: 'http://www.goat1000.com/tagcanvas.php' }
    ];

    $scope.jsComponents = jsComponents;

  }];
});