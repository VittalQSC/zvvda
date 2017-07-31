import angular from 'angular';
import playerComponent from './player.component';
import { translationManager } from './../../utils/';
let config = function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              };
config.$inject = ['$translateProvider']
const player = angular.module('player', [])
              .config(config)
              .component('player', playerComponent)
              .name;

export default player;