import angular from 'angular';
import navbarComponent from './navbar.component';
import { configs, constants, locale, translationManager } from './../../utils/';
import 'angular-translate';
let config = function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              };
config.$inject = ['$translateProvider']
export default angular.module('navbar', ['pascalprecht.translate'])
              .config(config)
              .component('navbar', navbarComponent);