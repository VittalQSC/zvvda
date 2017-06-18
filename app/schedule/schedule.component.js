import scheduleTemplate from './schedule.template.html';
export default {
  template: scheduleTemplate,
  controller: function () {
    this.scheduleName = "schedule vittal";
    this.hideSchedule = false;
    this.toggleArrowBtn = (e) => {
      e.preventDefault();
      this.hideSchedule = !this.hideSchedule;
      // debugger;
      // console.log(e);
    }
  }
  
}

  