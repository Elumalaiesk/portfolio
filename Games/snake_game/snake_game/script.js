const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const boxSize = 20;
const canvasSize = 400;
const totalBoxes = canvasSize / boxSize;

// Score display
const scoreDisplay = document.getElementById("scoreDisplay");

// Snake initialization
let snake = [{ x: 5 * boxSize, y: 5 * boxSize }];
let food = randomFoodPosition();
let direction = { x: 0, y: 0 }; // Initially, the snake doesn't move
let score = 0;
let isMoving = false; // Check if the snake is moving

document.addEventListener("keydown", changeDirection);

// Main game loop
function gameLoop() {
    if (isGameOver()) {
        alert("Game Over! Your score: " + score);
        location.reload();
        return;
    }

    clearCanvas();
    drawSnake();
    drawFood();
    moveSnake();

    setTimeout(gameLoop, 100);
}

// Draw functions
function clearCanvas() {
    ctx.clearRect(0, 0, canvasSize, canvasSize);
}

function drawSnake() {
    snake.forEach((segment) => {
        ctx.fillStyle = "#008000";
        ctx.fillRect(segment.x, segment.y, boxSize, boxSize);
        ctx.strokeStyle = "#000";
        ctx.strokeRect(segment.x, segment.y, boxSize, boxSize);
    });
}

function drawFood() {
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(food.x, food.y, boxSize, boxSize);
}

// Snake movement and direction change
function moveSnake() {
    if (!isMoving) return; // Don't move until direction is set

    let head = { x: snake[0].x + direction.x * boxSize, y: snake[0].y + direction.y * boxSize };
    snake.unshift(head);

    // If the snake eats the food
    if (head.x === food.x && head.y === food.y) {
        score++;
        updateScore(); // Update score display
        food = randomFoodPosition();
    } else {
        snake.pop();
    }
}

function changeDirection(event) {
    const key = event.keyCode;
    const up = 38, down = 40, left = 37, right = 39;

    if (key === up && direction.y === 0) {
        direction = { x: 0, y: -1 };
        isMoving = true;
    } else if (key === down && direction.y === 0) {
        direction = { x: 0, y: 1 };
        isMoving = true;
    } else if (key === left && direction.x === 0) {
        direction = { x: -1, y: 0 };
        isMoving = true;
    } else if (key === right && direction.x === 0) {
        direction = { x: 1, y: 0 };
        isMoving = true;
    }
}

// Update the score display
function updateScore() {
    scoreDisplay.textContent = score;
}

// Food random position generator
function randomFoodPosition() {
    const foodX = Math.floor(Math.random() * totalBoxes) * boxSize;
    const foodY = Math.floor(Math.random() * totalBoxes) * boxSize;
    return { x: foodX, y: foodY };
}

// Game over condition
function isGameOver() {
    const head = snake[0];
    return (
        head.x < 0 ||
        head.x >= canvasSize ||
        head.y < 0 ||
        head.y >= canvasSize ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    );
}

gameLoop(); // Start the game loop
