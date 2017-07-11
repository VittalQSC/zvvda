import angular from 'angular'
import createTournamentPageComponent from './createTournamentPage.component'

const createTournamentPage = angular.module('createTournamentPage', [])
              .component('createTournamentPage', createTournamentPageComponent)
              .name;

export default createTournamentPage;