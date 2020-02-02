var canvas=document.getElementById('canvas');
var ctx = canvas.getContext('2d')
var x1 = 50;
var y1 = 50;
var p = 0;
for(var i = 0;i<25;i++){
	k();
	function k(){
		ctx.beginPath();
		ctx.rect(x1,y1,50,50);
		ctx.fill();
		x1+=75;
		if(x1>400){
			x1=50;y1+=75;
		}
	}
}
function c(){
	p++;
	x1 =50;
	y1 = 50;
	for(var i = 0;i<5;i++){
	ctx.fillStyle =  "red";
	ctx.beginPath();
		ctx.rect(x1,y1,50,50);
		ctx.fill();
		x1+=75;
		}
	
	if(p == 2){
		x1 =50;
		y1 = 125;
		for( i = 0;i<5;i++){
		
ctx.fillStyle =  "green";
ctx.beginPath();
		ctx.rect(x1,y1,50,50);
		ctx.fill();

	x1+=75;	
	}}
	if(p == 3){
		x1 =50;
		y1 = 200;
		for( i = 0;i<5;i++){
		
ctx.fillStyle =  "blue";
ctx.beginPath();
		ctx.rect(x1,y1,50,50);
		ctx.fill();

	x1+=75;	
	}}
	if(p == 4){
		x1 =50;
		y1 = 275;
		for( i = 0;i<5;i++){
		
ctx.fillStyle =  "maroon";
ctx.beginPath();
		ctx.rect(x1,y1,50,50);
		ctx.fill();

	x1+=75;	
	}}
	if(p == 5){
		x1 =50;
		y1 = 350;
		for( i = 0;i<5;i++){
		
ctx.fillStyle =  "yellow";
ctx.beginPath();
		ctx.rect(x1,y1,50,50);
		ctx.fill();

	x1+=75;	
	}}
}