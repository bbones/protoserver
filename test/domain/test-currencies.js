var Currency = require('../../domain/currency');

var currencies = [
  new Currency("USD", "US Dollar"),
  new Currency("EUR", "Euro"),
  new Currency("GBP", "Great Britain Pound"),
  new Currency("UAH", "Ukrainian hryvna")
];

module.exports = currencies;
