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
        

          case 'solvingContest':
          this.header = "Международный конкурс по решению шашечных композиций "
          this.items = [
              {
                  showIcon: false,
                  iconSrc: "",
                  className: ``,
                  href: "https://docs.google.com/document/d/1-tIfvpfyu0l2-rV3qWwPcA2SoqUplAdyg-9KguJHvpE/edit?usp=sharing",
                  text: "12 поз для конкурса",
                  // subText:  " " + tournament.currentRound + "/" + tournament.roundAmount
              },
              {
                  showIcon: false,
                  iconSrc: "",
                  className: ``,
                  href: "https://docs.google.com/document/d/1Ctv25bCUKX6kyWhUhcP2BNlH7u8uxwUHu25n1urD0-Y/edit?usp=sharing",
                  text: "Группа 10",                
              },
              {
                  showIcon: false,
                  iconSrc: "",
                  className: ``,
                  href: "https://docs.google.com/document/d/1LNX4-q3_W13qO0cYJNdaZPXVhB3zwDy-2BgjQjaqx64/edit?usp=sharing",
                  text: "Группа 13",                
              },
              {
                  showIcon: false,
                  iconSrc: "",
                  className: ``,
                  href: "https://docs.google.com/document/d/1A3ZoQZpXajGhhnVEgJ1uWj0zMXDqoF1ZjzwnoqmGH_0/edit?usp=sharing",
                  text: "Группа 16",                
              },
              {
                  showIcon: false,
                  iconSrc: "",
                  className: ``,
                  href: "https://docs.google.com/document/d/1g3QRKM5-pKYaC5TYbeSZ4YzSM8gVDhAjW-k2p7GbutA/edit?usp=sharing",
                  text: "Группа 19",                
              },
              {
                  showIcon: false,
                  iconSrc: "",
                  className: ``,
                  href: "https://docs.google.com/document/d/1l_-Q3t0TgN-2G9NNXIWSaI7wt4qY1cpwpGFQh-_yl2A/edit?usp=sharing",
                  text: "Группа 26+",                
              },
              
          ]
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


  