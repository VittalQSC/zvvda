import angular from 'angular'
import teamsTemplate from './teams.template.html'
import { configs, constants, translationManager } from './../../utils/';

let teamsController = function ($routeParams, $http, $translate) {
  translationManager.subscribe($translate);
  // console.log('$routeParams.groups',$routeParams.groups);    
  this.mapCountryToCountryCode = constants.mapCountryToCountryCode;
  this.tournNum = 0;
  this.findT = (team, name) => {
    if (!team.tournaments) {
      return ;
    }
    return team.tournaments[team.tournaments.map(t => t.shortName).indexOf(name)] &&
    team.tournaments[team.tournaments.map(t => t.shortName).indexOf(name)].points;
  }
  $http.get(`http://${configs.host}:${configs.port}/tournaments/groups/${$routeParams.groups}/teams`).then(res => {
    this.teams = res.data;
    this.tournNum = Math.max.apply(Math, res.data.map(d => d.tournaments.length));
    this.maxTourns = res.data[res.data.map(t => t.tournaments.length).indexOf(this.tournNum)].tournaments
  });

}

teamsController.$inject = ["$routeParams","$http", "$translate"]

export default {
    template: teamsTemplate,
    bindings: {
      teamsId: "="
    },
    controller: teamsController

  }

