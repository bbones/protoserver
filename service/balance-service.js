var fs = require('fs');
var Balance = require('../domain/balance');

class BalanceService {
  load(name, handler) {
      fs.readFile( name, function(err, data) {
        if (err) {
          throw err;
        }
        var balanceObj = JSON.parse(data.toString());
				var balance = new Balance(balanceObj.balance.active,
						balanceObj.balance.liability,
							balanceObj.balance.equity);
        handler(balance);
      });
	}
};

module.exports = BalanceService;
