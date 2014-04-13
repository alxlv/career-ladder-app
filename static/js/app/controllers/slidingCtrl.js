define(function (require) {
  'use strict';

  return ['$scope', function ($scope) {

    $scope.dataModel = {
      header: "Job wanted!",
      comments: 'Especially interested in AngularJS, NodeJS and other cool JS-* stuff!',
      positions: ['Senior .NET/Javascript developer', 'Technical leader', 'Architect'],
      contacts: ['skype:aleksander.levshin', 'mailto:aleks.levshin@gmail.com'],
    };
  }];
});
