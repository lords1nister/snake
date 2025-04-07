function animate () {
    basic.clearScreen()
    headX = snakeX[0] + directionX[direction]
    headY = snakeY[0] + directionY[direction]
    if (headX < 0 || headX >= columns || headY < 0 || headY >= rows) {
        reset()
        return
    }
    led.plotBrightness(headX, headY, 255)
    for (let i = snakeLength - 1; i > 0; i--){
        snakeX[i] = snakeX[i-1];
        snakeY[i] = snakeY[i-1];

        if (headX == snakeX[i] &&
            headY == snakeY[i])
        {
            reset();
            return;
        }

        led.plotBrightness(snakeX[i], snakeY[i], 150);
    }
snakeX[0] = headX
    snakeY[0] = headY
    if (headX == mouseX && headY == mouseY) {
        score = score + 1
        snakeLength = snakeLength + 1
        mouseX = randint(0, columns - 1)
        mouseY = randint(0, rows - 1)
    }
    led.plotBrightness(mouseX, mouseY, 100)
}
function onKeyA () {
    direction = direction - 1
    if (direction < 0) {
        direction = 3
    }
}
function onKeyB () {
    direction = direction + 1
    if (direction > 3) {
        direction = 0
    }
}
function reset () {
    snakeX = [1, 0]
    snakeY = [0, 0]
    snakeLength = 2
    direction = 0
    mouseX = 3
    mouseY = 3
    score = 0
}
let headY = 0
let headX = 0
let directionY: number[] = []
let directionX: number[] = []
let columns = 0
let rows = 0
rows = 5
columns = 5
let snakeX:number[];
let snakeY:number[];
let snakeLength:number;
let direction:number;
directionX = [
1,
0,
-1,
0
]
directionY = [
0,
1,
0,
-1
]
let mouseX:number;
let mouseY:number;
let score:number;
reset()
loops.everyInterval(500, animate);
input.onButtonPressed(Button.A, onKeyA);
input.onButtonPressed(Button.B, onKeyB);
