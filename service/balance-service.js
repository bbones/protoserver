var fs = require('fs');

const BalanceService = function(){
	return {
	    load : function(name, handler) {
	      console.log(name);
	      fs.readFile( name, function(err, data) {
	        if (err) {
	          throw err;
	        }
	        var balance = JSON.parse(data.toString());
	        handler(balance);
	      });
		}
	}
};

module.exports = BalanceService;
