define(function (require) {
  'use strict';

  return ['$scope', function ($scope) {

    $scope.dataModel = {
      header: "Job wanted!",
      positions: ['Senior .NET/Javascript developer', 'technical leader', 'architect'],
      contacts: ['skype:aleksander.levshin', 'mailto:aleks.levshin@gmail.com'],
      comments: 'Especially interested in AngularJS, NodeJS and other cool JS-* stuff!'
    };
  }];
});
