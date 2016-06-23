const AccountList = function(){
	accounts = ['Active', 'Passive', 'Equity']
	return {
		size : function() {
			return accounts.length;
		}
	};
};

module.exports = AccountList;