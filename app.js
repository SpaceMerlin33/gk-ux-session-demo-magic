document.querySelector("h1").textContent = taskSettings.title;
document.title = taskSettings.title;

let todos = [];

function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (text && todos.length < taskSettings.maxTasks) {
        todos.push({ text, id: Date.now() });
        input.value = '';
        renderTodos();
    }
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

function renderTodos() {
    const list = document.getElementById('todoList');
    list.innerHTML = todos
        .map(todo => `
            <li>
                <span>${todo.text}</span>
                <button onclick="deleteTodo(${todo.id})">Delete</button>
            </li>
        `)
        .join('');
}