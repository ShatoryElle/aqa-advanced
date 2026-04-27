//import axios from "axios";
const axios = require('axios');

axios.interceptors.request.use(
  (config) => {
    console.log(`[REQUEST] ${config.method.toUpperCase()} ${config.url}`);
    if (config.data) {
      console.log(`[REQUEST BODY]`, config.data);
    }
    return config;
  },
  (error) => {
    console.error('[REQUEST ERROR]', error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    console.log(
      `[RESPONSE] Status: ${response.status} | URL: ${response.config.url}`,
    );
    return response;
  },
  (error) => {
    console.error('[RESPONSE ERROR]', error.message);
    return Promise.reject(error);
  },
);

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API Tests', () => {
  test('GET /posts — отримати список постів', async () => {
    const response = await axios.get(`${BASE_URL}/posts`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);

    const post = response.data[0];
    expect(post).toHaveProperty('id');
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('body');
    expect(post).toHaveProperty('userId');
  });

  test('GET /posts/1 — отримати один пост по ID', async () => {
    const response = await axios.get(`${BASE_URL}/posts/1`);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
    expect(response.data).toHaveProperty('userId');
    expect(typeof response.data.title).toBe('string');
    expect(typeof response.data.body).toBe('string');
  });

  test('GET /users — отримати список юзерів', async () => {
    const response = await axios.get(`${BASE_URL}/users`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);

    const user = response.data[0];
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
  });

  test('GET /comments?postId=1 — отримати коментарі до поста', async () => {
    const response = await axios.get(`${BASE_URL}/comments`, {
      params: { postId: 1 },
    });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);

    response.data.forEach((comment) => {
      expect(comment).toHaveProperty('postId', 1);
      expect(comment).toHaveProperty('id');
      expect(comment).toHaveProperty('email');
      expect(comment).toHaveProperty('body');
    });
  });

  test('POST /posts — створити новий пост', async () => {
    const newPost = {
      title: 'Test Post',
      body: 'This is a test body',
      userId: 1,
    };

    const response = await axios.post(`${BASE_URL}/posts`, newPost);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });
});
