import angular from 'angular';
import greetingComponent from './greeting.component';
import { translationManager } from './../../utils/';
let config = function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              };
config.$inject = ['$translateProvider']
const greeting = angular.module('greeting', [])
              .config(config)
              .component('greeting', greetingComponent)
              .name;

export default greeting;