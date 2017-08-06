import $ from 'jquery';
import angular from 'angular'
import previewComponent from './preview.component'
import { translationManager } from './../../utils/';
let config = function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              };
config.$inject = ['$translateProvider']
export default angular.module('preview', [])
              .config(config)
              .component('preview', previewComponent);