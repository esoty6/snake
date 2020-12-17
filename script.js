document.addEventListener("keypress", function(event) {
    if (event.key == 's') {
        //move down
    }
    else if (event.key == 'w') {
        //move up
    }
    else if (event.key == 'a') {
        //move left
    }
    else if (event.key == 'd') {
        goRight();
    }
});
function goRight() {
let snake = "";
let oldSnake = snake;
for (i = 0; i < 40; i++) {
    snake = snake +'<div class="snake"></div>';
    if ((i+1) % 40 == 0) oldSnake = snake - oldSnake;
}
document.getElementById("board").innerHTML = oldSnake;
}