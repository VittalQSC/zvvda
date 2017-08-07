import { translationManager, configs, constants } from './../../utils/';

let RoundsComponentController = function ($routeParams, $translate, $http) {
  translationManager.subscribe($translate);
  this.mapResults = constants.mapResults;
  this.tournamentName = '';
  $http.get(`http://${configs.host}:${configs.port}/tournaments/` + $routeParams.tournamentId)
  .then(res => {
    this.tournamentName = res.data.name;
    this.rounds = res.data.rounds;
  }); 

  this.handleRoundClick = function (event, id) {
    event.preventDefault();
    this.currGames = [];
    this.rounds = this.rounds.map(round => {
      round.id === id && (this.currGames = !round.active ? round.games : []);
      return {
        ...round, 
        active: round.id === id ? !round.active : false
      }
    });
  }
  
  this.currGames = [];
}

RoundsComponentController.$inject = ['$routeParams', '$translate', '$http']

export default RoundsComponentController;