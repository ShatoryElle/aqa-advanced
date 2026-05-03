const axios = require('axios');
const { fetchWithError, fetchDataWithHeadersAndParams } = require('./api');

jest.mock('axios');

describe('ДЗ 15.1', () => {
  test('Завдання 1', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));
    const result = await fetchWithError();
    expect(result).toBe('Помилка запиту');
  });

  test('Завдання 2', async () => {
    const mockUrl = 'https://api.test.com';
    const mockHeaders = { Authorization: 'Bearer 123' };
    const mockParams = { search: 'test' };

    axios.get.mockResolvedValue({ status: 200 });

    await fetchDataWithHeadersAndParams(mockUrl, mockHeaders, mockParams);

    expect(axios.get).toHaveBeenCalledWith(mockUrl, {
      headers: mockHeaders,
      params: mockParams,
    });
  });

  test('Завдання 3 - Success', async () => {
    const mockData = { data: 'success' };
    axios.get.mockResolvedValue(mockData);

    const result = await axios.get('https://test.com');
    expect(result).toEqual(mockData);
  });

  test('Завдання 3 - Failure', async () => {
    axios.get.mockRejectedValue(new Error('500'));
    await expect(axios.get('https://test.com')).rejects.toThrow('500');
  });
});
