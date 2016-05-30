" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){

  display.innerHTML = "hello";
}

function oneToTen(){
	var x ="oneToTen()"+"<br/>"+"***Output***"+"<br/>";
	for(var i=0;i<11;i++){
		x=x+i+"<br/>";
	}
	display.innerHTML=x;
}
function oddNumbers(){
	var x ="oddNumbers()"+"<br/>"+"***Output***"+"<br/>";
	for (var i =0;i<20;i++){
		if(i%2==0){
			x=x+i+"<br />";
		}
	}
	display.innerHTML = x
}
function squareNums(){
	var x ="squares()"+"<br/>"+"***Output***"+"<br/>";
	for(var i=1;i<11;i++){
		x=x+=Math.pow(i,2)+"<br />";
	}
	display.innerHTML =x
}
function random4(){
	var x ="random4()"+"<br/>"+"***Output***"+"<br/>";
	for(var i=0;i<4;i++){
		x+= Math.floor((Math.random() * 100)+1)+"<br />";
	}
	display.innerHTML =x
}
function evenNum(){
	var x ="even(20)"+"<br/>"+"***Output***"+"<br/>";
	var n = parseInt((prompt("Choose a number")),10);
	for(var i=0;i<n;i++){
		if(i%2==0){
			x+= i+"<br />";
		}
	}
	display.innerHTML =x
}
function powersOf2(){
	var x ="powers(8)"+"<br/>"+"***Output***"+"<br/>";
	var n = parseInt((prompt("Choose a number")),10);
	for(var i=1;i<=n;i++){	
		x+=Math.pow(2,i)+"<br />";		
	}
	display.innerHTML = x
}
function areWeThereYet(){
	var reply ="";
	while((reply.toLowerCase())!="yes"){
		display.innerHTML+="\"Arewethereyet?\""+"<br />";
		reply = prompt("What is your answer?");
		display.innerHTML+=reply+"<br />";
	}
	display.innerHTML+="Good!";
}
function triangle(){
	var x ="triangle()"+"<br/>"+"***Output***"+"<br/>";
	for(var i=1;i<6;i++){
		for(var j=0;j<i;j++){
			x+="*";
		}
		display.innerHTML=x+="<br />";
	}
}
function tablesquares4(){
	var x ="tableSquare()"+"<br/>"+"***Output***"+"<br/>";
	for(var i =1;i<5;i++){
		for(var j=1;j<5;j++){
			x+="|"+(j*i);
		
				}
				display.innerHTML=x+="|<br />";
			}
			display.innerHTML=x

	}		
	


function tablesquaresN(){
	var x ="tableSquares(6)"+"<br/>"+"***Output***"+"<br/>";
	var n = parseInt(prompt("How many rows and columns do you want?"));
	for(var i =1;i<n+1;i++){
		for(var j=1;j<n+1;j++){
			x+="|"+(j*i);
		
				}
				display.innerHTML=x+="|<br />";
			}
			display.innerHTML=x

	}

























