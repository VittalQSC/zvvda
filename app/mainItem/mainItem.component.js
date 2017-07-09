import mainItemTemplate from './mainItem.template.html'
export default {
    template: mainItemTemplate,
    controller: function ($http) {
      this.groupId = 1;
      this.tournaments = [];

      $http.get('http://localhost:8081/tournaments/groups/' + this.groupId)
      .then(res => {
        console.log(res.data);
        this.tournaments = res.data;
      });
      
    }
  }