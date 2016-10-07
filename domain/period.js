'use strict';

class Period {
  constructor(start, end, next) {
    this.next = next;
    this.start = start;
    this.end = end;
  }
}

module.exports = Period;
