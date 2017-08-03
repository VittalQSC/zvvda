import { translationManager, configs, constants } from './../../utils/';

let CountryComponentController = function ($routeParams, $translate, $http) {
    translationManager.subscribe($translate);
    const countryId = $routeParams.id;
    $http.get(`http://${configs.host}:${configs.port}/countries/${countryId}/players`)
    .then(res => {
      console.log('country info', res.data);
    });
  }

CountryComponentController.$inject = ['$routeParams', '$translate', '$http']

export default CountryComponentController;