class Period {
  constructor() {
    this.eventList = [];
  }
  add(backlogEvent) {
    this.eventList.push(backlogEvent);
  }
}

module.exports = Period;
