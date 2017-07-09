import angular from 'angular'
import navbarTemplate from './navbar.template.html'
export default {
    template: navbarTemplate,
    controller: function () {
      this.title = 'EYC Draughts 2017';
      this.results = 'Results';
      this.regulations = 'Regulations';
    }
  }

