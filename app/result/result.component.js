import angular from 'angular'
import resultTemplate from './result.template.html'
export default {
    template: resultTemplate,
    controller: function ($routeParams, $http) {
      console.log('$routeParams', $routeParams);
      this.players = [];
      $http.get('http://localhost:8081/tournaments/' + $routeParams.tournamentId)
      .then(res=>{
        console.log('sucRes', res)
        this.players = res.data.players
        this.players.sort((a, b) => a.sortNumber - b.sortNumber)
      }, err=>{console.log(err)});

    }

  }

