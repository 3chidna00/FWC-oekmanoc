const balloon = document.getElementById('balloon');

const color = ['red', 'green', 'blue'];

const min_size = 200;
const max_size = 420;

let size = min_size;
let color_index = 0;

function setsize(newsize) {
    size = newsize
    balloon.style.width = newsize + 'px';
    balloon.style.height = newsize + 'px';
}

function setcolor(index) {
    color_index = ((index % color.length) + color.length) % color.length;
    balloon.style.backgroundColor = color[color_index];
}

balloon.addEventListener("click", function() {
    setsize(size + 10);

    if (size > max_size) {
        setsize(min_size);
    }
    
    setcolor(color_index + 1);
});

balloon.addEventListener("mouseleave", function() {
    const newsize = Math.max(min_size, size - 5);
    setsize(newsize);
    setcolor(color_index - 1);
});