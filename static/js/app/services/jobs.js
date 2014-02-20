define(function (require) {
  'use strict';

  var _             = require('underscore'),
      jobsMetadata  = require('metadata/jobs-metadata')

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
        return _.range(parseInt(years[0]), parseInt(years[_.size(years) - 1]) + 1, 1);
      }
    };

  }];

});
