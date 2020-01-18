var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "red";

function triangle(x1,y1,x2,y2,x3,y3){
	ctx.beginPath();
		ctx.moveTo(x1,y1)
		ctx.lineTo(x2,y2)
		ctx.lineTo(x3,y3)
		ctx.lineTo(x1,y1)
		ctx.fill()
	ctx.closePath
}

// triangle(700,300,900,500,200,100)
var xc = innerWidth/2;
var yc =innerHeight/2;
function eqtriangl(x,y,size){
	ctx.beginPath();
		ctx.moveTo(x-(size/2),y+size/2)
		ctx.lineTo(x-(size/2)+size,y+size/2)
		ctx.lineTo(x,y-size/2)
		ctx.lineTo(x-(size/2),y+size/2)
		ctx.fill()
	ctx.closePath();
}
eqtriangl(xc,yc,200)





















// ctx.beginPath();
// ctx.fillStyle = "yellow";
// ctx.fillRect(400,200,100,100);
// ctx.closePath();

// ctx.beginPath();
// ctx.strokeStyle = "green";
// ctx.lineWidth = 10;
// ctx.strokeRect(800,200,100,150);
// ctx.closePath();

// ctx.beginPath();
// ctx.strokeStyle = "black";
// ctx.lineWidth = 5;
// ctx.arc(800,600,100,0,Math.PI,true);
// ctx.stroke();
// ctx.closePath();


// var rand = Math.round(Math.random() *2)

// var colors = ["yellow","green","blue"]

// for(var i =0;i<500;i+=25){
//     console.log(i)
//     ctx.beginPath();
//     ctx.strokeStyle = colors[rand];
//     ctx.lineWidth = rand;
//     ctx.moveTo(100+i,100);
//     ctx.lineTo(100+i,200);
//     ctx.stroke()
//     ctx.closePath();
// }
