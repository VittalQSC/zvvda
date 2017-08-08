import mainItemTemplate from './mainItem.template.html';
import { configs, constants, imgs, translationManager } from './../../utils/';

let mainItemController =  function ($routeParams, $http, $translate) {
      translationManager.subscribe($translate);
      this.$onInit = function() {
        let groupId = this.groupId || $routeParams.groups || 1;
        this.items = [];
        this.header = '';
        let itemsUrl = '';
        switch (this.itemType) {
          case 'countries':
            const mapCountryToCountryCode = constants.mapCountryToCountryCode;

            this.header = "Countries"
            itemsUrl = `http://${configs.host}:${configs.port}/countries`;
            this.showFlag = true;
            $http.get(itemsUrl)
            .then(res => {
              const countries = res.data;
              this.items = countries.map(country => {
                return {
                  showIcon: true,
                  className: `flag flag-${mapCountryToCountryCode[country.name]}`,
                  href: "#!/country/" + country.id,
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
            itemsUrl = `http://${configs.host}:${configs.port}/tournaments/groups/${groupId}`;
            $http.get(itemsUrl)
            .then(res => {
              this.tournaments = res.data.tournaments;
              this.tournaments.sort((a, b) => a.shortName.localeCompare(b.shortName));
              const tournaments = this.tournaments;
              this.group = res.data.group;
              this.header = res.data.group[constants.mapLang[translationManager.currLocale]];
              this.status = constants.mapTournamentStatus[this.group.status];
              this.items = tournaments.map(tournament => {
                return {
                  showIcon: false,
                  iconSrc: "",
                  className: ``,
                  href: "#!/result?tournamentId=" + tournament.id + "&groups=" + groupId,
                  text: tournament.shortName,
                  subText:  " " + tournament.currentRound + "/" + tournament.roundAmount
                };
              });
              this.items.push({
                  showIcon: false,
                  iconSrc: "",
                  className: ``,
                  href: "#!/teams?groups=" + groupId,
                  text: "Teams",
                  isTeams: true,
                  // disabled: true
                });              
          })              
            break;
        }



      }; 
    };

mainItemController.$inject = ["$routeParams","$http", "$translate"];

export default {
    template: mainItemTemplate,
    bindings: {
     itemType: '=',
     showPreview: '=',
     groupId: '='
    },
    controller:mainItemController
  }


  