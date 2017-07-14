import angular from 'angular'
import playerTemplate from './player.template.html'
import { configs, translationManager } from './../../utils/';
export default {
    template: playerTemplate,
    bindings: {
      playerId: "="
    },
    controller: function ($http, $translate) {
      translationManager.subscribe($translate);
      this.player = {};
      this.tournaments = [{}];
      this.$onInit = function() {
        // console.log(this.playerId);
        $http.get(`http://${configs.host}:${configs.port}/players/${this.playerId}`).then(res => {
          this.player = res.data;
          console.log(res);
          this.tournaments = this.player.tournaments;
        });
                  
      }


    }

  }

