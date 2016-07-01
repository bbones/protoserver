class Balance {

	constructor (active, liability, equity) {
		this.active = active;
		this.liability = liability;
		this.equity = equity;
	}

	error () {
		debugger;
	  return this.active - this.liability - this.equity;
	}

};

module.exports = Balance;
