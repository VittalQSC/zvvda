import angular from 'angular';
import navbarTemplate from './navbar.template.html';
import { translationManager } from './../../utils/';
export default {
    template: navbarTemplate,
    // controller: function ($translateProvider) {
    controller: function ($translate) {
      // console.log($translateProvider);

      this.title = "EYC_DRAUGHTS_2017";
      this.results = 'RESULTS';
      this.regulations = 'REGULATIONS';

      this.onChangeLangClick = (e, lang) => {
        e.preventDefault();
        translationManager.setCurrLocale(lang, $translate);
        // $translate.use(lang);
      }
    }
  }

