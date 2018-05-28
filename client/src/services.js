export const addTodo = async todo => {
  const data = await fetch("http://localhost:8081/api/todos", {
    body: JSON.stringify(todo), // must match 'Content-Type' header
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors" // no-cors, cors, *same-origin
  });

  return data.json();
};

export const saveTodo = async todo => {
  const data = await fetch(`http://localhost:8081/api/todos/${todo.id}`, {
    body: JSON.stringify(todo), // must match 'Content-Type' header
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors" // no-cors, cors, *same-origin
  });

  return data;
};

export const deleteTodo = async id => {
  const data = await fetch(`http://localhost:8081/api/todos/${id}`, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors" // no-cors, cors, *same-origin
  });

  return data;
};

export const getTodos = async () => {
  const data = await fetch("http://localhost:8081/api/todos");
  return data.json();
};
