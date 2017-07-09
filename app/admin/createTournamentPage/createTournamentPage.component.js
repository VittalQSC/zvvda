import angular from 'angular'
import createTournamentPageTemplate from './createTournamentPage.template.html'
export default {
    template: createTournamentPageTemplate,
    controller: function ($http) {
      this.user = 'VITTAL';
      $http.post('http://localhost:8081/tournaments/link',{
          "link": "http://chessarbiter.com/turnieje_warcaby/2016/f_4621/"
      }).then(res => {alert(res)}, e=>{console.log('err', e);});
      
      $http.get('localhost:8081/countries/cities')
      .then(res => {console.log(res)}, ()=>{console.log('err');});
    }
  }

