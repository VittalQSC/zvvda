import angular from 'angular'
import createTournamentPageTemplate from './createTournamentPage.template.html'
export default {
    template: createTournamentPageTemplate,
    controller: function ($http) {
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

      this.importClick = () => {
        const url = this.data.externalUrl;
        $http.post('http://localhost:8081/tournaments/link',{"link": url}).then(res => {
          Object.assign(this.data, res.data);
        }, e=>{
          console.log('err', e);
        });
      }

    }
  }

