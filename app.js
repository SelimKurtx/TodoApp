const form = document.querySelector(".todo_form");
const input = document.querySelector(".todo_input");
const todo_contaner = document.querySelector(".todo_container");

const addHTML = (todo) => {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const todoLeft = document.createElement("div");
  todoLeft.classList.add("todo_left");

  const todoCb = document.createElement("input");
  todoCb.type = "checkbox";
  todoCb.checked = todo.isCompleted;
  todoCb.classList.add("todo_cb");

  const todo_Text = document.createElement("span");
  todo_Text.classList.add("todo_text");
  todo_Text.textContent = todo.text;

  todoLeft.appendChild(todoCb);
  todoLeft.appendChild(todo_Text);

  const todoRight = document.createElement("div");
  todoRight.classList.add("todo_right");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("todo_delete");
  deleteBtn.textContent = "Delete";

  const todoEdit = document.createElement("button");
  todoEdit.classList.add("todo_edit");
  todoEdit.textContent = "Edit";

  todoRight.appendChild(deleteBtn);
  todoRight.appendChild(todoEdit);

  todoDiv.appendChild(todoLeft);
  todoDiv.appendChild(todoRight);

  todo_contaner.appendChild(todoDiv);
}

const startconf = () => {
  // başlangıç ayarları
  const todos = JSON.parse(localStorage.getItem("todos"));
  if (!todos){
    localStorage.setItem("todos", JSON.stringify([]));
  }else {
    todos.forEach(todo => {
      addHTML(todo);
    });
  }
}

startconf();

const addTodo = (e) => {
  e.preventDefault();

  const todoText = input.value;

  const todo = {
    text: todoText,
    isCompleted: false,
  }

  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  
 addHTML(todo);
 form.reset();

}

form.addEventListener("submit", addTodo);
