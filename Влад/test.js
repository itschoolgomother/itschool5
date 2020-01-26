function code(text){
	var txt = text.split("")
	var shfir = [];
	for (var i = 0; i < txt.length; i++) {	
	var nums = txt[i].charCodeAt(0)+2
	shfir.push(String.fromCharCode(nums)) 
	}
	console.log(shfir)
}
code("vdfglad")

