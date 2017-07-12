import angular from 'angular';
import greetingComponent from './greeting.component';
import { translationManager } from './../../utils/';

const greeting = angular.module('greeting', [])
              .config(function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              })
              .component('greeting', greetingComponent)
              .name;

export default greeting;