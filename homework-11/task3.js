async function getTodoAsync() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await response.json();
}

async function getUserAsync() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return await response.json();
}

async function showData() {
  const todo = await getTodoAsync();
  const user = await getUserAsync();
  console.log("Async results:", { todo, user });
}

showData();