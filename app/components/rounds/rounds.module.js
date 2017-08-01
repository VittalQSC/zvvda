import angular from 'angular'
import roundsComponent from './rounds.component'
import { translationManager } from './../../utils/';
let config = function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              };
config.$inject = ['$translateProvider']
const rounds = angular.module('rounds', [])
              .config(config)
              .component('rounds', roundsComponent)
              .name;

export default rounds;