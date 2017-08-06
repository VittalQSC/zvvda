import angular from 'angular';
import detailsTemplate from './details.template.html';
import { configs, translationManager } from './../../utils/';

let detailsController = function ($routeParams, $http) {
     Object.assign(this, {
        Tournament_details: "Tournament_details",
        Place: "Place",
        Players_number: "Players_number",
        Current_Round: "Current_Round",
        Arbiter: "Arbiter",
        Days: "Days",
      });

      this.tournamentData = {};
      this.chessArbiterUrl = '';
      $http.get(`http://${configs.host}:${configs.port}/tournaments/${$routeParams.tournamentId}`)
      .then(res => {
        // console.log('suc', res);
        this.chessArbiterUrl = res.data.externalUrl;
        this.gamesUrl = res.data.gamesUrl;
        this.tournamentData = Object.assign({}, res.data);
      }, err=>{console.log(err)});
    };
detailsController.$inject = ["$routeParams", "$http"];

export default {
    template: detailsTemplate,
    controller: detailsController
  }

