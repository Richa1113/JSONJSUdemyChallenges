const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodo = () => {
  fetch(apiUrl + "?_limit=5")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDom(todo));
    });
};

const addTodoToDom = (todo) => {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute("class", "todo");
  div.setAttribute("data-id", todo.id);
  if (todo.completed) {
    div.classList.add("done");
  }
  const list = document.getElementById("todo-list");
  list.appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault();
  //console.log(e.target.firstElementChild.value);
  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "content-Type": "application/json",
      //token : "valid"
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDom(data));
};

const toggleCompleted = (e) => {
  //console.log(e.target.classList.contains("done"));
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("done");
    ///console.log(e.target.classList.contains("done"));
    updateTodo(e.target.dataset.id, e.target.classList.contains("done"));
  }
};

const updateTodo = (id, completed) => {
  //console.log(id, completed);
  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed }),
    headers: {
      "contents-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const deleteTodo = (e) => {
  if (e.target.classList.contains("todo")) {
    const newId = e.target.dataset.id;
    fetch(`${apiUrl}/${newId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => e.target.remove());
  }
};

const init = () => {
  document.addEventListener("DOMContentLoaded", getTodo);
  document.querySelector("#todo-form").addEventListener("submit", createTodo);
  document
    .querySelector("#todo-list")
    .addEventListener("click", toggleCompleted);
  document.querySelector("#todo-list").addEventListener("dblclick", deleteTodo);
};

//getTodo();
init();
