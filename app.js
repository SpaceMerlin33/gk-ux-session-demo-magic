document.querySelector("h1").textContent = taskSettings.title;
document.title = taskSettings.title;

let todos = [];

function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (text && todos.length < taskSettings.maxTasks) {
        todos.push({ text, id: Date.now(), completed: false });
        input.value = '';
        renderTodos();
    }
}

function toggleTodo(id) {
    todos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

function clearCompleted() {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
}

function renderTodos() {
    document.getElementById("clearCompleted").disabled = !todos.some(todo => todo.completed);
    const remaining = todos.filter(todo => !todo.completed).length;
    document.getElementById("taskCount").textContent = `${remaining} of ${todos.length} tasks remaining`;
    const list = document.getElementById('todoList');
    list.innerHTML = todos
        .map(todo => `
            <li>
                <span style="text-decoration: ${todo.completed ? 'line-through' : 'none'}">${todo.text}</span>
                <button onclick="toggleTodo(${todo.id})" aria-pressed="${todo.completed}">${todo.completed ? 'Undo' : taskSettings.completedLabel}</button>
                <button onclick="deleteTodo(${todo.id})">Delete</button>
            </li>
        `)
        .join('');
}
