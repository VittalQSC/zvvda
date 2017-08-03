import $ from 'jquery';
import angular from 'angular'
import resultComponent from './result.component'
import { translationManager } from './../../utils/';
let config = function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              };
config.$inject = ['$translateProvider']
export default angular.module('result', [])
              .config(config)
              .component('result', resultComponent);