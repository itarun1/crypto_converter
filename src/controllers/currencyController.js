const axios = require('axios');
const Currency = require('../models/Currency');
const { makeApiRequest } = require('../utils/apiUtils');


const getTop100Cryptos = async () => {
    try {
      const response = await makeApiRequest(`${process.env.COINGECKO_API_URL}/coins/markets`, 'GET', {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: false,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  
  const convertCurrency = async (source, amount, target) => {
    try {
      const response = await makeApiRequest(`${process.env.COINGECKO_API_URL}/simple/price`, 'GET', {
        ids: source,
        vs_currencies: target,
      });
      const exchangeRate = response[source][target];
      return amount * exchangeRate;
    } catch (error) {
      throw error;
    }
  };



module.exports = {
  getTop100Cryptos,
  convertCurrency,
};
