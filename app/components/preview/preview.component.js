import angular from 'angular'
import $ from 'jquery';
import previewTemplate from './preview.template.html'
import { configs, constants, translationManager } from './../../utils/';

let previewController = function ($routeParams, $http, $translate, $scope) {
      translationManager.subscribe($translate);
      this.$onInit = function () {
        Object.assign(this, {
          player: "PLAYER",
          rating: "RATING",
          title: "TITLE",
          country: "COUNTRY"
        });   
        

        this.activeTournIndex = 0;
        
        this.tournClicked = (e, index) => {
          e.preventDefault();
          this.activeTournIndex = index;
        }
        setInterval(() => {
          $scope.$apply();
          this.tournaments && (this.tournaments = this.tournaments.slice());
          this.tournaments && (this.activeTournIndex = (this.activeTournIndex + 1) % this.tournaments.length);
        }, 5000);
      }

      this.mapCountryToCountryCode = constants.mapCountryToCountryCode;
      // this.players = [];
    };

previewController.$inject = ["$routeParams", "$http", "$translate", "$scope"];

export default {
    template: previewTemplate,
    controller: previewController,
    bindings: {
      tournamentId: '=',
      tournaments: '='
    }
  }

