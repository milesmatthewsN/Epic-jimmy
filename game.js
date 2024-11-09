// Get the canvas and its context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size to window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Player variables
let playerX = canvas.width / 2;
let playerY = canvas.height - 50;
let playerWidth = 50;
let playerHeight = 50;
let playerSpeed = 5;

// Key press state
const keys = {};

// Listen for keydown and keyup events
window.addEventListener('keydown', (e) => { keys[e.key] = true; });
window.addEventListener('keyup', (e) => { keys[e.key] = false; });

// Game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move player based on key presses
    if (keys['ArrowLeft']) playerX -= playerSpeed;
    if (keys['ArrowRight']) playerX += playerSpeed;
    if (keys['ArrowUp']) playerY -= playerSpeed;
    if (keys['ArrowDown']) playerY += playerSpeed;

    // Draw player (a simple rectangle)
    ctx.fillStyle = 'blue'; // Player color
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);

    // Repeat the game loop
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
