var rand = Math. ceil(Math.random()*10)
var num = prompt("от 0 до 10","10")
if (rand == num) {
alert("привет")	
}else{
	alert("пока от ярослава "+ rand)
}
var red =Math.random()*255
var green=Math.random()*255
var blue=Math.random()*255
document.body.style.backgroundColor = "rgb("+red+","+green+","+blue+")"