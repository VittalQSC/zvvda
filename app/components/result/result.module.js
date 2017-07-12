import angular from 'angular'
import resultComponent from './result.component'
import { translationManager } from './../../utils/';
export default angular.module('result', [])
              .config(function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              })
              .component('result', resultComponent);