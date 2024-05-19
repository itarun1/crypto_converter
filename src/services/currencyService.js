const currencyController = require('../controllers/currencyController');
const Currency = require('../models/Currency');



const getTop100CryptosService = async () => {
  try {
    const cryptos = await currencyController.getTop100Cryptos();
    // Perform any additional business logic or data processing here if needed
    return cryptos;
  } catch (error) {
    throw error;
  }
};

const convertCurrencyService = async (source, amount, target) => {
  try {
    const convertedAmount = await currencyController.convertCurrency(source, amount, target);
    // Perform any additional business logic or data processing here if needed
    return convertedAmount;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTop100CryptosService,
  convertCurrencyService,
};
