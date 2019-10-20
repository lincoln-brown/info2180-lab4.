function Main(){

	
var board = Array(9);
var divs=document.querySelector('#board');
var turn = "X";
var winCombo = new Array([0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]);

for(i=0; i<divs.children.length; i++){
divs.children[i].id=i.toString();

}

for(i=0; i<divs.children.length; i++){

divs.children[i].classList.add("square");
divs.children[i].onclick=function(){
	
	
	
if (turn==="X"||turn==="x"){
		board[this.id]="X";
		this.innerHTML = "<strong>X<strong>";
		this.classList.remove('O','X');
		this.classList.add('X');
		win(board,winCombo,"X");
		turn="O";
}else{
	board[this.id]="O";
	this.innerHTML = "<strong>O<strong>";
	this.classList.remove('O','X');
	this.classList.add('O');
	win(board,winCombo,"O");
	turn="X";

}
	
console.log(board[0]);

};	//end of on click function 

divs.children[i].addEventListener('mouseover',function(){
this.classList.add('hover');

});
divs.children[i].addEventListener('mouseout',function(){
this.classList.remove('hover');

});



		
}// end of for loop 

 var btn = document.querySelector("button");
 btn.onclick= function(){
alert(divs.children[1].children[0].textContent);
}

function win(brd,WC,turn){
	for(i=0; i<WC.length; i++){
		if (brd[WC[i][0]]===turn && brd[WC[i][1]]===turn && brd[WC[i][2]]=== turn){
			console.log( turn +" is the winner");
			

	}
}
}




alert("DOMContentLoaded.");
}
document.addEventListener("DOMContentLoaded",Main);


