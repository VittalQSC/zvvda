import angular from 'angular'
import detailsComponent from './details.component'
import { translationManager } from './../../utils/';
const details = angular.module('details', [])
              .config(function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              })
              .component('details2', detailsComponent)
              .name;

export default details;