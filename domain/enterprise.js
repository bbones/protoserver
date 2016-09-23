var Party = require('./party');

class Enterprise extends Party {

  constructor(enterpriseName, taxId) {
    super(enterpriseName);
    this.taxId = taxId;
  }

}

module.exports = Enterprise;
