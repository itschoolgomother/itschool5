var text ="Egor"
var letters = text.split("");
var shifr =[]
var option = promt(1 or 2 or 3)
for(var i = 0;i<letters.length;i++){
	if (option == 1) {
		code += 10
	}else if (option == "2") {
		code -= 10
	}else{
		alert("eror")
	}
	var code = letters[i].charCodeAt(0)+3
	shifr.push(String.fromCharCode(code))
}
console.log(shifr)


// alert(text.charCodeAt(0))
// alert(letters[0])
// String.fromCharCode(97)