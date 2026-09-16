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

$balloon.on("mouseleave", function () {
    setSize(Math.max(MIN_SIZE, size - 5));
    setColor(colorIndex - 1);
});
