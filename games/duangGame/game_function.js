var score = 0;
var speed = 5;
var ballRadius = 10;
var canvas = document.getElementById("gamecanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 3;
var y = canvas.height - 50;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

var rightPressed = false;
var leftPressed = false;


function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    if (x + dx > canvas.width - ballRadius || x + dx < 0) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
            score += 1;
            console.log(score)
        }
        else {
            document.getElementById("title").innerHTML = "弹 弹 球 - Game Over"
            alert("GAME OVER");
            location.reload();
        }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    document.getElementById("sc").innerHTML = "score : " + score;

    x += dx;
    y += dy;

}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", changeSpeed, false);
function changeSpeed(e) {
    if (e.keyCode == 83) {
        speed = Number(prompt("输入速度(值越小速度越快，默认5，只有一次机会):"));
        var interval = setInterval(draw, speed * 2);
    }
}

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

var interval = setInterval(draw, speed * 2);

var dx = 2;
var dy = -2;

