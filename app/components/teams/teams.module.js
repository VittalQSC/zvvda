import angular from 'angular';
import teamsComponent from './teams.component';
import { translationManager } from './../../utils/';
let config = function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              };
config.$inject = ['$translateProvider']
const teams = angular.module('teams', [])
              .config(config)
              .component('teams', teamsComponent)
              .name;

export default teams;