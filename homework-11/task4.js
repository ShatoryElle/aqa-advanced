class ApiService {
  async getTodo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await res.json();
  }

  async getUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return await res.json();
  }
}

const api = new ApiService();
api.getTodo().then(console.log);
api.getUser().then(console.log);