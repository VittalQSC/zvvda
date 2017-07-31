import angular from 'angular'
import detailsComponent from './details.component'
import { translationManager } from './../../utils/';
let config = function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              };
config.$inject = ['$translateProvider']
const details = angular.module('details', [])
              .config(config)
              .component('details2', detailsComponent)
              .name;

export default details;