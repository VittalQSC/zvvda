import angular from 'angular'
import scheduleComponent from './schedule.component'
import { translationManager } from './../../utils/';

const schedule = angular.module('schedule', [])
              .config(function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              })
              .component('schedule', scheduleComponent)
              .name;

export default schedule;