import { translationManager, configs, constants } from './../../utils/';

let ScheduleComponentController = function ($translate, $http) {
    translationManager.subscribe($translate);
    this.scheduleName = "Schedule";
    this.hideComponent = false; 
    this.hideSchedule = false;
    this.arrowBtnMode = !this.hideSchedule ? "up" : "down"; 
    this.toggleArrowBtn = (e) => {
      e.preventDefault();
      this.hideSchedule = !this.hideSchedule;
      this.arrowBtnMode = !this.hideSchedule ? "up" : "down"; 
     
    }

    this.hideComponentBtn = (e) => {
      e.preventDefault();
      this.hideComponent = !this.hideComponent;
    }


    window.addEventListener('locale-changed', e => {
      this.currEventNames = this.currEvent.events.map(event => 
        event[constants.mapLang[translationManager.currLocale]]);
    })

    let eventsObjs = []; 
    this.events = [];
    this.currEvent = {};
    this.currEventNames = [];
    this.currEventIndex = 0;

    this.prevDate = (e) => {
      e.preventDefault();
      this.currEventIndex = (eventsObjs.length + this.currEventIndex - 1) % eventsObjs.length;
      this.currEvent = eventsObjs[this.currEventIndex];
      this.currEventNames = this.currEvent.events.map(event => 
        event[constants.mapLang[translationManager.currLocale]]);      
    }
    this.nextDate = (e) => {
      e.preventDefault();
      this.currEventIndex = (this.currEventIndex + 1) % eventsObjs.length;
      this.currEvent = eventsObjs[this.currEventIndex];
      this.currEventNames = this.currEvent.events.map(event => 
        event[constants.mapLang[translationManager.currLocale]]);
    }
    $http.get(`http://${configs.host}:${configs.port}/events`).then(res => {
      let keys = Object.keys(res.data);
      keys.sort((d1, d2) => {
        return (new Date(d1)).getTime() - (new Date(d2)).getTime();
      })
      eventsObjs = keys.map(key => {
        return {
          date: key,
          events: res.data[key]
        };
      });
      this.currEvent = eventsObjs[this.currEventIndex];
      this.currEventNames = this.currEvent.events.map(event => 
        event[constants.mapLang[translationManager.currLocale]]);
    });
  }

ScheduleComponentController.$inject = ['$translate', '$http']

export default ScheduleComponentController;