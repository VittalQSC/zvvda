import angular from 'angular';
import playerComponent from './player.component';
import { translationManager } from './../../utils/';

const player = angular.module('player', [])
              .config(function ($translateProvider) {  
                translationManager.translateProviderInit($translateProvider);              
              })
              .component('player', playerComponent)
              .name;

export default player;