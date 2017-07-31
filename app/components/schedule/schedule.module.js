import angular from 'angular'
import scheduleComponent from './schedule.component'
import { translationManager } from './../../utils/';
let config = function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              };
config.$inject = ['$translateProvider']
const schedule = angular.module('schedule', [])
              .config(config)
              .component('schedule', scheduleComponent)
              .name;

export default schedule;