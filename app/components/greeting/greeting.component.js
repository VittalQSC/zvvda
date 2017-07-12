import angular from 'angular'
import greetingTemplate from './greeting.template.html'
import { translationManager } from './../../utils/';
export default {
    template: greetingTemplate,
    controller: function ($routeParams, $http, $translate) {
      translationManager.subscribe($translate);
      Object.assign(this, {
        European_Youth_Championship: "19th_European_Youth_Championship",
        Welcome_to_the_European_Youth_Championship: "Welcome_to_the_European_Youth_Championship",
        There_will_be_more_information_soon_on_this_site: "There_will_be_more_information_soon_on_this_site",
      });


    }

  }

