import angular from 'angular'
import resultTemplate from './result.template.html'
export default {
    template: resultTemplate,
    controller: function ($routeParams, $http) {
      console.log('$routeParams', $routeParams);
      $http.get('http://localhost:8081/tournaments/groups/' + $routeParams.group)
      .then(res=>{
        console.log('suc', res)
      }, err=>{console.log(err)});
    
      const mockRes = {
          "id": null,
          "name": "European Championship Hopes Boys 2016 (B10) Blitz",
          "shortName": null,
          "begin": "2016-08-09",
          "end": "2016-08-09",
          "arbiter": "Vital Aniśka",
          "organizer": null,
          "city": {
              "id": null,
              "name": "Pinsk/EDC/BDF",
              "country": null
          },
          "system": "SWISS",
          "roundAmount": 9,
          "currentRound": 9,
          "externalUrl": "http://chessarbiter.com/turnieje_warcaby/2016/f_4621/"
      };
      
      
    }

  }

