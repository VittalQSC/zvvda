import angular from 'angular'
import mainItemComponent from './mainItem.component'
import { translationManager } from './../../utils/';
let config = function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              };
config.$inject = ['$translateProvider']
export default angular.module('mainItem', [])
              .config(config)
              .component('mainItem', mainItemComponent);