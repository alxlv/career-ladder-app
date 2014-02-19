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
      },

      findJobs: function(month, year) {
        var to = ("0" + month).slice(-2) + "." + year;
        var from = to;
        var jobs = _.where(this.getAll(), { dateTo: to });
        if (_.size(jobs) === 0) {
          jobs = _.where(this.getAll(), { dateFrom: from });
        }

        return jobs;
      },

      findJobById: function(jobId) {
        return _.where(this.getAll(), { id: jobId })[0];
      }

    };

  }];

});
