import { translationManager, configs, constants } from './../../utils/';

let CountryComponentController = function ($routeParams, $translate, $http) {
    translationManager.subscribe($translate);
    const countryId = $routeParams.id;
    this.mapCountryToCountryCode = constants.mapCountryToCountryCode;
    $http.get(`http://${configs.host}:${configs.port}/countries`)
    .then(res => {
      let countries = res.data;
      let index = countries.map(c => "" + c.id).indexOf(countryId);
      this.country = countries[index];
    });
    $http.get(`http://${configs.host}:${configs.port}/countries/${countryId}/players`)
    .then(res => {
      this.results = res.data;

    });
  }

CountryComponentController.$inject = ['$routeParams', '$translate', '$http']

export default CountryComponentController;