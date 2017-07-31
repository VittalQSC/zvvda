import angular from 'angular';
import createTournamentPageTemplate from './createTournamentPage.template.html';
// import configs from './../../../../configs/';
import { configs } from './../../../utils/';

let createTournamentPageController = function ($scope, $http) {
      // console.log('configs',configs);
      this.data = {
        arbiter: null,
        begin: null,
        city: {
          country: null,
          id: null,
          name: null,
        },
        currentRound: null,
        end: null,
        externalUrl: null,
        id: null,
        name: null,
        organizer: null,
        roundAmount: null,
        shortName: null,
        system: null
      };

      this.countries = [];
      this.cities = [];
      $http.get(`http://${configs.host}:${configs.port}/countries`).then(res => this.countries = res.data);
      $http.get(`http://${configs.host}:${configs.port}/countries/cities`).then(res => this.cities = res.data);

      this.selected_country = undefined;
      this.selected_city = undefined;

      this.updateCities = () => {
        let selected_country = this.selected_country.trim();
        this.selected_country_id = this.countries.length > 0 ? this.countries.filter(country => {  return country.name === selected_country;})[0].id : undefined;
      }

      this.importClick = () => {
        const url = this.data.externalUrl;
        $http.post(`http://${configs.host}:${configs.port}/tournaments/link`,{"link": url}).then(res => {
          Object.assign(this.data, res.data);
        }, e=>{
          console.log('err', e);
        });
      }

      this.onSubmit = (e) => {
        e.preventDefault();
        this.data.city = this.cities[this.selected_country_id] && this.cities[this.selected_country_id].length > 0 
                       ? this.cities[this.selected_country_id].filter(city => city.name === this.selected_city.trim())[0] : null;

        $http.post(`http://${configs.host}:${configs.port}/tournaments`, this.data).then(res => {
          alert('success!')
        }, () => {});
      }

    };
createTournamentPageController.$inject = ["$scope", "$http"];

export default {
    template: createTournamentPageTemplate,
    controller: createTournamentPageController
  }

