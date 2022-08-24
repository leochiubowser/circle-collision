var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


function background() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

    }
}


var circle = new Circle(canvas.width / 2, canvas.height / 2, 20, "red");
var circle2 = new Circle(30, 30, 20, "yellow");

addEventListener("mousemove", (e) => {
    circle2.x = e.offsetX;
    circle2.y = e.offsetY;
})

var distance;
function collision() {
    distance = Math.sqrt(Math.pow((circle.x - circle2.x), 2) + Math.pow((circle.y - circle2.y), 2));
    console.log(distance);
    if (distance <= circle.radius + circle2.radius) {
        circle2.color = "green";
    }
    else {
        circle2.color = "yellow";
    }
}

animation();

function animation() {
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background();

    collision();
    circle.draw();
    circle2.draw();
}