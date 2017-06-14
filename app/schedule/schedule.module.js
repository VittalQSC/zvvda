import angular from 'angular'
import scheduleComponent from './schedule.component'

const schedule = angular.module('schedule', [])
              .component('schedule', scheduleComponent)
              .name;

export default schedule;