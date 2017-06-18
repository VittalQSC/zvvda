import scheduleTemplate from './schedule.template.html';
export default {
  template: scheduleTemplate,
  controller: function () {
    this.scheduleName = "schedule vittal";
    this.hideSchedule = false;
    this.arrowBtnMode = !this.hideSchedule ? "up" : "down"; 
    this.toggleArrowBtn = (e) => {
      e.preventDefault();
      this.hideSchedule = !this.hideSchedule;
      this.arrowBtnMode = !this.hideSchedule ? "up" : "down"; 
      // debugger;
      // console.log(e);
    }
  }
  
}

  