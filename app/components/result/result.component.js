import angular from 'angular'
import $ from 'jquery';
import resultTemplate from './result.template.html'
import { configs, constants, translationManager } from './../../utils/';

let resultController = function ($routeParams, $http, $translate) {
      translationManager.subscribe($translate);
      Object.assign(this, {
        player: "PLAYER",
        rating: "RATING",
        title: "TITLE",
        country: "COUNTRY"
      });
      this.mapCountryToCountryCode = constants.mapCountryToCountryCode;
      this.players = [];
      $http.get(`http://${configs.host}:${configs.port}/tournaments/` + $routeParams.tournamentId)
      .then(res=>{
        this.players = res.data.players
        this.players.sort((a, b) => a.sortNumber - b.sortNumber)
        this.players.sort((a, b) => a.place - b.place)
        
        this.mapIdToPlayer = this.players.reduce((map, player) => {
          // map[player.id] = player.externalName;
          map[player.id] = player;
          return map;
        }, {});
        // console.log(this.players);
      }, err=>{console.log(err)});

      this.$onInit = function () {
        // $(document).ready(function(){
        //   $('[data-toggle="tooltip"]').tooltip();   
        // }); 
      }
    };

resultController.$inject = ["$routeParams", "$http", "$translate"];

export default {
    template: resultTemplate,
    controller: resultController
  }

