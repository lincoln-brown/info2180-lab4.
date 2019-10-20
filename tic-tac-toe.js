function Main(){

	
var board = Array(9);
var divs=document.querySelector('#board');
var status=document.querySelector('#status');
var turn = "X";// x always starts first
var winCombo = new Array([0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]);// declaring all posible win conditions

for(i=0; i<divs.children.length; i++){
divs.children[i].id=i.toString();// applying id names to each square on the board so that they can be individually targeted

}

for(i=0; i<divs.children.length; i++){

divs.children[i].classList.add("square");//laying out board 
divs.children[i].onclick=function(){
	
	
	
if (turn==="X"||turn==="x"){
		board[this.id]="X";
		this.innerHTML = "<strong>X<strong>";
		this.classList.remove('O','X');
		this.classList.add('X');
		var winner = win(board,winCombo,"X");
		if (winner == true){
			status.innerHTML="<strong>Congratulations! X is the Winner!<strong>"
			status.classList.add('you-won');
			}
		turn="O";
}else{
	board[this.id]="O";
	this.innerHTML = "<strong>O<strong>";
	this.classList.remove('O','X');
	this.classList.add('O');
	var winner = win(board,winCombo,"O");
	if (winner == true){
			status.innerHTML="<strong>Congratulations! O is the Winner!<strong>"
			status.classList.add('you-won');

		}
		turn="O"
	turn="X";

}
	


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
			
			return true;
			

	}
}
}




alert("DOMContentLoaded.");
}
document.addEventListener("DOMContentLoaded",Main);


