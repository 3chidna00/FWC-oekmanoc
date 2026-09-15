const list = document.getElementById("ft_list");
const newBtn = document.getElementById("new-btn");

function getTodos() {
    const cookie = document.cookie
    return cookie ? JSON.parse(cookie.split("=")[1]) : [];
}

function saveTodos(todos) {
    document.cookie = "todos=" + JSON.stringify(todos) + "; max-age=" + 60 * 60 * 24 * 7;
    console.log("todos=" + JSON.stringify(todos));
}

function addTodoToDOM(text, prependToTop) {
    const div = document.createElement("div");
    div.className = "todo-item";
    div.textContent = text;

    div.addEventListener("click", function() {
        if (confirm("Remove this to-do item?")) {
            div.remove();
            saveTodos(getTodos().filter(t => t !== text));
        }
    });

    prependToTop ? list.prepend(div) : list.appendChild(div);
}

newBtn.addEventListener("click", function() {
    const text = prompt("Enter your new to-do:");
    if (!text || !text.trim()) return;

    const trimmed = text.trim();
    saveTodos([trimmed, ...getTodos()]);
    addTodoToDOM(trimmed, true);
});

// load saved todos
getTodos().forEach(text => addTodoToDOM(text, false));