var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

canvas.style.backgroundColor = "red";


for (var i=0;i<1000;i++) {
ctx.fillStyle = "black";
var randomX = Math.random() * innerWidth;  
var randomY = Math.random() * innerHeight;
}



for (var i=0;i<100;i++){
var randomi = Math.random() * 100;  
var randomt = Math.random() * 100;
var random = Math.random() * 255;
ctx.strokeStyle = 'rgb('+random+','+random+','+random+')';
ctx.strokeRect(randomX,randomY,randomi,randomt);
}

