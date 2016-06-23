var fs = require('fs');
const Balance = function(){
	return {
		error : function() {
		    return 0;
		},
		load : function() {
			fs.readFile( __dirname + '/test.txt', function (err, data) {
	  		if (err) {
	    		throw err;
	  		}
  			console.log(data.toString());
			});
		  return;
		}
	};
};

module.exports = Balance;
