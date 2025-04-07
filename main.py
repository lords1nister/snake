def animate():
    global headX, headY, score, snakeLength, mouseX, mouseY
    basic.clear_screen()
    headX = snakeX[0] + directionX[direction]
    headY = snakeY[0] + directionY[direction]
    if headX < 0 or headX >= columns or headY < 0 or headY >= rows:
        reset()
        return
    led.plot_brightness(headX, headY, 255)
    i = snakeLength - 1
    while i > 0:
        snakeX[i] = snakeX[i - 1]
        snakeY[i] = snakeY[i - 1]
        if headX == snakeX[i] and headY == snakeY[i]:
            reset()
            return
        led.plot_brightness(snakeX[i], snakeY[i], 150)
        i -= 1
    snakeX[0] = headX
    snakeY[0] = headY
    if headX == mouseX and headY == mouseY:
        score = score + 1
        snakeLength = snakeLength + 1
        mouseX = randint(0, columns - 1)
        mouseY = randint(0, rows - 1)
    led.plot_brightness(mouseX, mouseY, 100)
def onKeyA():
    global direction
    direction = direction - 1
    if direction < 0:
        direction = 3
def onKeyB():
    global direction
    direction = direction + 1
    if direction > 3:
        direction = 0
def reset():
    global snakeX, snakeY, snakeLength, direction, mouseX, mouseY, score
    snakeX = [1, 0]
    snakeY = [0, 0]
    snakeLength = 2
    direction = 0
    mouseX = 3
    mouseY = 3
    score = 0
headY = 0
headX = 0
directionY: List[number] = []
directionX: List[number] = []
columns = 0
rows = 0
rows = 5
columns = 5
directionX = [1, 0, -1, 0]
directionY = [0, 1, 0, -1]
reset()
loops.every_interval(500, animate)
input.on_button_pressed(Button.A, onKeyA)
input.on_button_pressed(Button.B, onKeyB)