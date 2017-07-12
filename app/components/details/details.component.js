import angular from 'angular';
import detailsTemplate from './details.template.html';
import { configs, translationManager } from './../../utils/';
export default {
    template: detailsTemplate,
    controller: function ($routeParams, $http) {
     Object.assign(this, {
        Tournament_details: "Tournament_details",
        Place: "Place",
        Players_number: "Players_number",
        Current_Round: "Current_Round",
        Arbiter: "Arbiter",
        Days: "Days",
      });

      this.tournamentData = {};
      $http.get(`http://${configs.host}:${configs.port}/tournaments/${$routeParams.tournamentId}`)
      .then(res => {
        console.log('suc', res);
        this.tournamentData = Object.assign({}, res.data);
      }, err=>{console.log(err)});
    }
  }

