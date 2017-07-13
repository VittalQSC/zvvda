import angular from 'angular';
import partnersComponent from './partners.component';
import { translationManager } from './../../utils/';

const partners = angular.module('partners', [])
              .config(function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              })
              .component('partners', partnersComponent)
              .name;

export default partners;