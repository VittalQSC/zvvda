import angular from 'angular'
import countryComponent from './country.component'
import { translationManager } from './../../utils/';
let config = function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              };
config.$inject = ['$translateProvider']
const country = angular.module('country', [])
              .config(config)
              .component('country', countryComponent)
              .name;

export default country;