import mainItemTemplate from './mainItem.template.html'
export default {
    template: mainItemTemplate,
    bindings: {
     itemType: '=',
    },
    controller: function ($http) {
      this.groupId = 1;
      this.items = [];
      this.header = '';
      let itemsUrl = '';
      this.$onInit = function() {
        console.log('itemType', this.itemType);
        switch (this.itemType) {
          case 'countries':
            const mapCountryToCountryCode = {
              Belarus: 'by',  
              Russia: 'ru', 
              Ukraine: 'ua',  
              Poland: 'pl', 
              Netherlands: 'nl',  
              Italy: 'it',  
              Czech: 'cz',  
              Latvia: 'lv', 
              Lithuania: 'lt',  
              Azerbaijan: 'az', 
              Belgium: 'be',  
              Estonia: 'ee',  
              Germany: 'de',  
              Turkey: 'tr', 
            }


            this.header = "Countries"
            itemsUrl = 'http://server:8081/countries';
            this.showFlag = true;
            $http.get(itemsUrl)
            .then(res => {
              // console.log(res.data);
              const countries = res.data;
              this.items = countries.map(country => {
                return {
                  showIcon: true,
                  iconSrc: "./../static/flags/flags.png",
                  className: `flag flag-${mapCountryToCountryCode[country.name]}`,
                  href: "#!/",
                  text: country.name
                };
              });
            });
            break;
        
          default:
            this.header = "Main"
            itemsUrl = 'http://server:8081/tournaments/groups/' + this.groupId;
            $http.get(itemsUrl)
            .then(res => {
              console.log(res.data);
              const tournaments = res.data;
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


  