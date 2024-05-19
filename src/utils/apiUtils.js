const axios = require('axios');

const makeApiRequest = async (url, method = 'GET', params = null, data = null) => {
  try {
    const config = {
      url,
      method,
      params,
      data,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  makeApiRequest,
};
