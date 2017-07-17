import angular from 'angular'
import mainItemComponent from './mainItem.component'
import { translationManager } from './../../utils/';
export default angular.module('mainItem', [])
              .config(function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              })
              .component('mainItem', mainItemComponent);