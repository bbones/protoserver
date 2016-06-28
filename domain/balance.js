const Balance = function(){
	var active = 1;
	var liability = 2;
	var equity = 3;

	return {
		error : function() {
		  return active - liability - equity;
		}
	};
};

module.exports = Balance;
