import angular from 'angular';
import navbarComponent from './navbar.component';
import { configs, constants, locale, translationManager } from './../../utils/';
import 'angular-translate';
export default angular.module('navbar', ['pascalprecht.translate'])
              .config(function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              })
              .component('navbar', navbarComponent);