/*global angular*/
import Report from './report';
export default angular.module('apps/sentinl.report', [])
  .factory(Report.name, /* @ngInject */ ($http, Alarm, sentinlHelper) => new Report($http, Alarm, sentinlHelper));
