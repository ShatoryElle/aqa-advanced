const axios = require('axios');

async function fetchWithError() {
  try {
    await axios.get('https://invalid-url-example.com/api/data');
  } catch {
    return 'Помилка запиту';
  }
}

async function fetchDataWithHeadersAndParams(url, headers, params) {
  try {
    const response = await axios.get(url, { headers, params });
    return response;
  } catch (error) {
    return error;
  }
}

module.exports = {
  fetchWithError,
  fetchDataWithHeadersAndParams,
};
