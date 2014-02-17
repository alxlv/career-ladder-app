define(function (require) {
  'use strict';

  var _             = require('underscore'),
      jobsMetadata  = require('metadata/jobs-metadata'),
      booksMetadata = require('metadata/books-metadata');

  return [function () {

    return {

      getAll: function() {
        return jobsMetadata.jobs;
      },

      getJobs: function() {
        // TODO: type - remote/office
        return jobsMetadata.jobs;
      },

      getBooks: function() {
        return booksMetadata.books;
      },

      getEducation: function() {
        // TODO: type - education
        return jobsMetadata.jobs;
      },

      getYears: function() {
        // TODO: get from jobs data
        var years = [];
        var currentYear = new Date().getFullYear();
        for (var idx = 1999; idx <= currentYear; idx++) {
          years.push(idx);
        }

        return years;
      }

    };

  }];

});
