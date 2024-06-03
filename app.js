let todos = [];
let idCounter = 0;

const todoTemplate = document.getElementById("todo-template").innerHTML;
const compiledTemplate = Handlebars.compile(todoTemplate);
const todoListContainer = document.getElementById("todo-list");

document.getElementById("add-todo").addEventListener("click", () => {
  const newTodoInput = document.getElementById("new-todo");
  const newTodoText = newTodoInput.value.trim();
  if (newTodoText) {
    todos.push({ id: idCounter++, text: newTodoText, completed: false });
    newTodoInput.value = "";
    renderTodos();
  }
});

function renderTodos() {
  const html = compiledTemplate({ todos });
  todoListContainer.innerHTML = html;
}

window.toggleTodo = function (id) {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    renderTodos();
  }
};

window.deleteTodo = function (id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
};
