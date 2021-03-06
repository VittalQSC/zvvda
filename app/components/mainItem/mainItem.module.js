import angular from 'angular'
import mainItemComponent from './mainItem.component'
import { translationManager } from './../../utils/';

import './../preview/preview.module';
let config = function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              };
config.$inject = ['$translateProvider']
export default angular.module('mainItem', ['preview'])
              .config(config)
              .component('mainItem', mainItemComponent);