define(function (require) {
  'use strict';

  var _             = require('underscore'),
      jobsMetadata  = require('metadata/jobs-metadata');

  return [function () {

    function _getYear(date) {
      var dates = date.split('.');
      if (_.size(dates) > 1) {
        return dates[1];
      }

      throw Error("Wrong date format");
    }

    return {

      getAll: function() {
        return jobsMetadata.jobs;
      },

      getTagsForJobs: function(jobs) {
        var tags = _.flatten(_.pluck(_.flatten(_.pluck(jobs, 'projects')), 'tags'));
        var langs = _.countBy(_.flatten((_.pluck(tags, 'languages'))), function(lang) { return lang; });
        langs = _.map(langs, function(value, key) {
          if (value < 3) {
            value += 8;
          }else {
            value += 10;
          }
          return { 'text': key, 'weight': value }
        });
        var stacks = _.countBy(_.flatten((_.pluck(tags, 'stack')), function(stack) { return stack; }));
        stacks = _.map(stacks, function(value, key) {
          if (value < 3) {
            value += 8;
          }else {
            value += 10;
          }
          return { 'text': key, 'weight': value }
        });
        return _.union(stacks, langs);
      },

      getAllTags: function() {
        return this.getTagsForJobs(jobsMetadata.jobs);
      },

      getEmploymentTypes: function() {
        return _.uniq(_.pluck(jobsMetadata.jobs, 'employment_type'));
      },

      getPositions: function() {
        return _.uniq(_.flatten(_.pluck(jobsMetadata.jobs, 'position')));
      },

      getWorkingTypes: function() {
        return _.filter(_.uniq(_.pluck(jobsMetadata.jobs, 'working_type')), function(t) { return t !== "" });
      },

      getMinMaxYears: function() {
        var years = this.getYears();
        return [years[0], years[_.size(years) - 1]];
      },

      getYears: function() {
        var datesFrom = _.uniq(_.map(_.pluck(jobsMetadata.jobs, 'dateFrom'), _getYear));
        var datesTo = _.uniq(_.map(_.pluck(jobsMetadata.jobs, 'dateTo'), _getYear));

        var years = _.sortBy(_.union(datesFrom, datesTo), function(y){ return y; });
        return _.range(parseInt(years[0]), parseInt(years[_.size(years) - 1]) + 2, 1);
      }
    };

  }];

});
