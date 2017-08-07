import angular from 'angular'
import partnersTemplate from './partners.template.html'
import { translationManager } from './../../utils/';

let partnersController = function ($routeParams, $http, $translate) {
      translationManager.subscribe($translate);
    }
  
    partnersController.$inject = ["$routeParams", "$http", "$translate"]

export default {
    template: partnersTemplate,
    controller: partnersController,
    bindings: {
      vertical: '='
    }
  }

