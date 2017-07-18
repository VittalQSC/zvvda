import mainItemTemplate from './mainItem.template.html';
import { configs, constants, imgs, translationManager } from './../../utils/';
export default {
    template: mainItemTemplate,
    bindings: {
     itemType: '=',
    },
    controller: function ($http, $translate) {
      translationManager.subscribe($translate);
      this.groupId = 1;
      this.items = [];
      this.header = '';
      let itemsUrl = '';
      this.$onInit = function() {
        switch (this.itemType) {
          case 'countries':
            const mapCountryToCountryCode = constants.mapCountryToCountryCode;

            this.header = "Countries"
            itemsUrl = `http://${configs.host}:${configs.port}/countries`;
            this.showFlag = true;
            $http.get(itemsUrl)
            .then(res => {
              // console.log(res.data);
              const countries = res.data;
              this.items = countries.map(country => {
                return {
                  showIcon: true,
                  className: `flag flag-${mapCountryToCountryCode[country.name]}`,
                  href: "#!/",
                  text: country.name
                };
              });
            });
            break;
        
          default:
            this.status = constants.mapTournamentStatus["FUTURE"];
            this.group = {}; 
            window.addEventListener('locale-changed', e => {
              this.header = this.group[constants.mapLang[translationManager.currLocale]]
            })

            itemsUrl = `http://${configs.host}:${configs.port}/tournaments/groups/${this.groupId}`;
            $http.get(itemsUrl)
            .then(res => {
              const tournaments = res.data.tournaments;
              this.group = res.data.group;
              this.header = res.data.group[constants.mapLang[translationManager.currLocale]];
              this.status = constants.mapTournamentStatus[this.group.status];
              this.items = tournaments.map(tournament => {
                return {
                  showIcon: false,
                  iconSrc: "",
                  className: ``,
                  href: "#!/result?tournamentId=" + tournament.id,
                  text: tournament.shortName
                };
              });              
            });
            break;
        }



      };

      
    }
  }


  