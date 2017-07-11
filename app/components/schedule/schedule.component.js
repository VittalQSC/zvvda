import scheduleTemplate from './schedule.template.html';
export default {
  template: scheduleTemplate,
  controller: function () {
    this.scheduleName = "schedule vittal";
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
  }
  
}

  