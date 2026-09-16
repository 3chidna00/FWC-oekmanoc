const colors = ["red", "green", "blue"];
let colorIndex = 0;

const MIN_SIZE = 200;
const MAX_SIZE = 420;

let size = MIN_SIZE;

const $balloon = $("#balloon");

function setSize(newSize) {
    size = newSize;
    $balloon.css({ width: size + "px", height: size + "px" });
}

function setColor(index) {
    colorIndex = ((index % colors.length) + colors.length) % colors.length;
    $balloon.css("background-color", colors[colorIndex]);
}

$balloon.on("click", function () {
    setSize(size + 10);

    if (size > MAX_SIZE) {
        setSize(MIN_SIZE);
    }

    setColor(colorIndex + 1);
});

let shrink_interval = null;

$balloon.on("mouseleave", function () {
    clearInterval(shrink_interval);
    shrink_interval = setInterval(function() {
        const newsize = Math.max(MIN_SIZE, size - 5);
        setSize(newsize);
        setColor(colorIndex - 1);

        if (newsize === MIN_SIZE) {
            clearInterval(shrink_interval);
        }
    }, 100);
});

$balloon.on("mouseenter", function () {
    clearInterval(shrink_interval);
});
