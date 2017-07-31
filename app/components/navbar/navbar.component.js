import angular from 'angular';
import navbarTemplate from './navbar.template.html';
import { translationManager } from './../../utils/';

let navbarController = function ($translate) {
      translationManager.subscribe($translate);

      this.title = "EYC_DRAUGHTS_2017";
      this.results = 'RESULTS';
      this.regulations = 'REGULATIONS';

      this.onChangeLangClick = (e, lang) => {
        e.preventDefault();
        translationManager.setCurrLocale(lang, $translate);
      }
    }

navbarController.$inject = ['$translate']

export default {
    template: navbarTemplate,
    // controller: function ($translateProvider) {
    controller: navbarController
  }

