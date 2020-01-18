var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "red";


ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.fillRect(400,200,100,100);
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 10;
ctx.strokeRect(800,200,100,150);
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(800,600,100,0,Math.PI,true);
ctx.stroke();
ctx.closePath();


var rand = Math.round(Math.random() *2)

var colors = ["yellow","green","blue"]

for(var i =0;i<500;i+=25){
    console.log(i)
    ctx.beginPath();
    ctx.strokeStyle = colors[rand];
    ctx.lineWidth = rand;
    ctx.moveTo(100+i,100);
    ctx.lineTo(100+i,200);
    ctx.stroke()
    ctx.closePath();
}
