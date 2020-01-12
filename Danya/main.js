var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
function k(){


	var l = confirm("Вы любите красный");
	if(l == true){
    ctx.fillStyle = "red";
	}
	else if (l == false){
     ctx.fillStyle = "black";
	}
	var x = prompt("Укажите х");
	var y = prompt("Укажите y");

	ctx.moveTo(x,y);
	var x = prompt("Укажите х");
	var y = prompt("Укажите y");
	ctx.lineTo(x,y);
	var x = prompt("Укажите х");
	var y = prompt("Укажите y");
	ctx.lineTo(x,y);
	ctx.fill();
}