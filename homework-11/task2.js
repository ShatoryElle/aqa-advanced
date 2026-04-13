function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json());
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json());
}

const allPromises = Promise.all([fetchTodo(), fetchUser()]);
allPromises.then(results => {
  console.log("Promise.all:", results);
});

const racePromises = Promise.race([fetchTodo(), fetchUser()]);
racePromises.then(winner => {
  console.log("Promise.race:", winner);
});