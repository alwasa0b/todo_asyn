export const addTodo = async todo => {
  const data = await fetch("http://localhost:8081/api/facets", {
    body: JSON.stringify({ todo }), // must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json"
    },
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // *client, no-referrer
  });

  return data.json();
};

export const getTodos = async () => {
  const data = await fetch("http://localhost:8081/api/facets");
  return data.json();
};
