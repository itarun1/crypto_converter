const express = require('express');
const router = express.Router();
const currencyService = require('../services/currencyService');

router.get('/top100', async (req, res) => {
  try {
    const top100Cryptos = await currencyService.getTop100CryptosService();
    res.json(top100Cryptos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/convert', async (req, res) => {
  const { source, amount, target } = req.body;

  try {
    const convertedAmount = await currencyService.convertCurrencyService(source, amount, target);
    res.json({ convertedAmount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
