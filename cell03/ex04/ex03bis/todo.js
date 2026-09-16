const $list = $("#ft_list");
const $newBtn = $("#new-btn");

function getTodos() {
    const cookie = document.cookie.split("; ").find(c => c.startsWith("todos="));
    return cookie ? JSON.parse(decodeURIComponent(cookie.split("=")[1])) : [];
}

function saveTodos(todos) {
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; max-age=" + 60 * 60 * 24 * 365;
}

function addTodoToDOM(text, prependToTop) {
    const $item = $("<div>").addClass("todo-item").text(text);

    $item.on("click", function () {
        if (confirm("Remove this to-do item?")) {
            $item.remove();
            saveTodos(getTodos().filter(t => t !== text));
        }
    });

    prependToTop ? $list.prepend($item) : $list.append($item);
}

$newBtn.on("click", function () {
    const text = prompt("Enter your new to-do:");
    if (!text || !text.trim()) return;

    const trimmed = text.trim();
    saveTodos([trimmed, ...getTodos()]);
    addTodoToDOM(trimmed, true);
});

// load saved todos
getTodos().forEach(text => addTodoToDOM(text, false));
