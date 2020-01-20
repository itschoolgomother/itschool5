var box = document.getElementById('box');
var vprs = prompt("Виберете размер и цвет квадрата и радиус","200 blue 50");
var vp = vprs.split(" ");

console.log(vp)

box.style.width = vp[0] +'px';
box.style.height = vp[0] +'px';
box.style.backgroundColor = vp[1];
box.style.borderRadius = vp[2] + '%';
















































// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// canvas.style.backgroundColor = 'red';
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var cx = window.innerWidth/2;
// var cy = window.innerHeight/2;
// ctx.beginPath();
// ctx.fillStyle = "white"
// ctx.arc(400,400,150,0,Math.PI*2);
// ctx.fill();
// ctx.closePath();

// ctx.fillRect(cx-50,cy-50,100,100);
// ctx.beginPath();
// ctx.fillStyle = "green"
// ctx.arc(400,420,50,Math.PI,Math.PI*2,true);
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.fillStyle = "blue"
// ctx.arc(350,300,10,0,Math.PI*2,);
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.fillStyle = "blue"
// ctx.arc(450,300,10,0,Math.PI*2,);
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.lineTo(300,100);
// ctx.lineTo(200,25);
// ctx.lineTo(100,100)
// ctx.stroke();













