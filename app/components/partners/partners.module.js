import angular from 'angular';
import partnersComponent from './partners.component';
import { translationManager } from './../../utils/';
let config = function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              };
config.$inject = ['$translateProvider']
const partners = angular.module('partners', [])
              .config(config)
              .component('partners', partnersComponent)
              .name;

export default partners;