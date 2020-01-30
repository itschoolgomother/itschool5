var say = prompt("ваш пароль","password")
var time = new Date();
var mypas = ""+time.getMinutes()
if(say == mypas){
	alert("привет ярослав")
	code()
}else{
	alert("пока от ярослава")
}





function code(){
var usd = 24.5
var x = prompt("ваше число?","10")
var resutgrn = usd*x
var resutusd = x/usd
alert(resutgrn.toFixed(2)+"грн")
alert(resutusd.toFixed(2) + "$")
}