var fs = require('fs');
var Balance = require('../domain/balance');

const BalanceService = function(){
	return {
	    load : function(name, handler) {
	      fs.readFile( name, function(err, data) {
	        if (err) {
	          throw err;
	        }
	        var balanceObj = JSON.parse(data.toString());
					var balance = new Balance(balanceObj.active, balanceObj.liability,
								balanceObj.equity);
	        handler(balanceObj);
	      });
		}
	}
};

module.exports = BalanceService;
